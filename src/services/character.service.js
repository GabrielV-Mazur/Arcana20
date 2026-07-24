import repo from '../repositories/character.repository.js';
import repoTable from '../repositories/table.repository.js';
import createError from '../utils/app-error.js';
import hashPassword, { compareHashedPassword } from '../utils/hash-password.js';
import { createToken } from '../middlewares/auth.middleware.js';

function ensureValidPayload({ name, userId, tableId, classe, race }) {
  if (!name?.trim()) throw createError('Nome é obrigatório.', 400);
  if (!userId) throw createError('Proprietário é obrigatório.', 400);
  if (!tableId) throw createError('Mesa é obrigatória.', 400);
  if (!classe?.trim()) throw createError('Classe é obrigatória.', 400);
  if (!race?.trim()) throw createError('Raça é obrigatória.', 400);
}

export default {
  async createCharacter(data) {
    ensureValidPayload(data);

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

  async listCharacters() {
    return repo.findAll();
  },

  async getCharacter(id) {
    const character = await repo.findById(id);
    if (!character) throw createError('Personagem não encontrado.', 404);
    return character;
  },

  async updateCharacter(id, data) {
    const payload = { ...data };

    if (payload.characterId) {
      const existing = await repo.findById(payload.characterId);
      if (existing && existing.id !== id) {
        throw createError('Usuário já possui um personagem.', 409);
      }
    }

    if (payload.name) {
      payload.name = payload.name.trim();
    }

    if (payload.classe) {
      payload.classe = payload.classe.trim();
    }

    if (payload.race) {
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
