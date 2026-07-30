import repo from '../repositories/character.repository.js';
import repoTable from '../repositories/table.repository.js';
import createError from '../utils/app-error.js';
import hashPassword, { compareHashedPassword } from '../utils/hash-password.js';
import { createToken } from '../middlewares/auth.middleware.js';
import { assertMaxLength } from '../utils/validate-length.js';

const MAX_NAME_LENGTH = 50;
const MAX_CLASSE_LENGTH = 50;
const MAX_RACE_LENGTH = 50;

function ensureValidPayload({ name, userId, tableId, classe, race }) {
  if (!name?.trim()) throw createError('Nome é obrigatório.', 400);
  if (!userId) throw createError('Proprietário é obrigatório.', 400);
  if (!tableId) throw createError('Mesa é obrigatória.', 400);
  if (!classe?.trim()) throw createError('Classe é obrigatória.', 400);
  if (!race?.trim()) throw createError('Raça é obrigatória.', 400);

  assertMaxLength(name, MAX_NAME_LENGTH, 'Nome');
  assertMaxLength(classe, MAX_CLASSE_LENGTH, 'Classe');
  assertMaxLength(race, MAX_RACE_LENGTH, 'Raça');
}

export default {
  async createCharacter(data) {
    ensureValidPayload(data);

    // Regra de negócio: cada usuário só pode ter 1 personagem em cada mesa.
    const alreadyInTable = await repo.findByUserAndTable(data.userId, data.tableId);
    if (alreadyInTable) {
      throw createError('Este usuário já possui um personagem nesta mesa.', 409);
    }

    const insert = await repo.create({
      name: data.name.trim(),
      userId: data.userId,
      tableId: data.tableId,
      classe: data.classe.trim(),
      race: data.race.trim(),
    });

    if (!insert) throw createError('Falha ao criar personagem.', 500);
    console.log(insert._id);
    const updateTable = await repoTable.updateById(data.tableId, { $push: { characterIds: insert._id } });
    console.log(updateTable);
    return insert;
  },

  async listCharacters(filters = {}) {
  const query = {};

      // ?available=true (ou ?tableId=null) -> personagens sem mesa, prontos para entrar em uma
      if (filters.available === 'true' || filters.tableId === 'null') {
        query.tableId = null;
      } else if (filters.tableId) {
        query.tableId = filters.tableId;
      }

      if (filters.userId) {
        query.userId = filters.userId;
      }

    return repo.findAll(query);
  },

  async getCharacter(id) {
    const character = await repo.findById(id);
    if (!character) throw createError('Personagem não encontrado.', 404);
    return character;
  },

  async updateCharacter(id, data) {
    const existing = await repo.findById(id);
    if (!existing) throw createError('Personagem não encontrado.', 404);

    const payload = { ...data };
    const isChangingTable = Object.prototype.hasOwnProperty.call(payload, 'tableId');

    if (isChangingTable) {
      const newTableId = payload.tableId || null;
      const oldTableId = existing.tableId;
      const tableChanged = String(newTableId || '') !== String(oldTableId || '');

      if (tableChanged) {
        if (newTableId) {
          // Entrando em uma mesa (nova ou diferente): valida a regra de 1 por usuário
          const alreadyInTable = await repo.findByUserAndTable(data.userId || existing.userId, newTableId);
          if (alreadyInTable && String(alreadyInTable._id) !== String(id)) {
            throw createError('Este usuário já possui um personagem nesta mesa.', 409);
          }
          await repoTable.addCharacter(newTableId, existing._id);
        }

        // Importante: o personagem NUNCA é excluído ao sair de uma mesa — ele
        // apenas é desvinculado dela e volta a ficar disponível (tableId: null).
        if (oldTableId) {
          await repoTable.removeCharacter(oldTableId, existing._id);
        }
      }

      payload.tableId = newTableId;
    }

    if (payload.name) {
      assertMaxLength(payload.name.trim(), MAX_NAME_LENGTH, 'Nome');
      payload.name = payload.name.trim();
    }

    if (payload.classe) {
      assertMaxLength(payload.classe.trim(), MAX_CLASSE_LENGTH, 'Classe');
      payload.classe = payload.classe.trim();
    }

    if (payload.race) {
      assertMaxLength(payload.race.trim(), MAX_RACE_LENGTH, 'Raça');
      payload.race = payload.race.trim();
    }

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    if (Object.keys(payload).length === 0) {
      throw createError('Nenhum campo informado para atualização.', 400);
    }

    const updated = await repo.updateById(id, payload);
    if (!updated) throw createError('Personagem não encontrado.', 404);
    return updated;
  },

  async removeCharacter(id) {
    const deleted = await repo.deleteById(id);
    if (!deleted) throw createError('Personagem não encontrado.', 404);
  },

};
