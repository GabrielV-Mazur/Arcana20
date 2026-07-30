import repo from '../repositories/table.repository.js';
import repoCharacter from '../repositories/character.repository.js';
import createError from '../utils/app-error.js';
import { assertMaxLength } from '../utils/validate-length.js';

const MAX_NAME_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 500;
const MAX_CATEGORIES_LENGTH = 50;

function ensureValidPayload({ name, description, categories }) {
  if (!name?.trim()) throw createError('Nome é obrigatório.', 400);
  if (!description?.trim()) throw createError('Descrição é obrigatória.', 400);
  if (!categories?.trim()) throw createError('Categoria é obrigatória.', 400);

  assertMaxLength(name.trim(), MAX_NAME_LENGTH, 'Nome');
  assertMaxLength(description.trim(), MAX_DESCRIPTION_LENGTH, 'Descrição');
  assertMaxLength(categories.trim(), MAX_CATEGORIES_LENGTH, 'Categoria');
}

export default {
  async createTable(data) {
    ensureValidPayload(data);

    return repo.create({
      name: data.name.trim(),
      description: data.description.trim(),
      categories: data.categories.trim(),
    });
  },

  async listTables() {
    return repo.findAll();
  },

  async getTable(id) {
    const table = await repo.findById(id);
    if (!table) throw createError('Mesa não encontrada.', 404);
    return table;
  },

  async updateTable(id, data) {
    const payload = { ...data };

    if (payload.id_table) {
      const existing = await repo.findById(payload.id_table);
      if (existing && existing.id !== id) {
        throw createError('ID da mesa já cadastrado.', 409);
      }
    }

    if (payload.name) {
      assertMaxLength(payload.name.trim(), MAX_NAME_LENGTH, 'Nome');
      payload.name = payload.name.trim();
    }

    if (payload.description) {
      assertMaxLength(payload.description.trim(), MAX_DESCRIPTION_LENGTH, 'Descrição');
      payload.description = payload.description.trim();
    }

    if (payload.categories) {
      assertMaxLength(payload.categories.trim(), MAX_CATEGORIES_LENGTH, 'Categoria');
      payload.categories = payload.categories.trim();
    }

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    if (Object.keys(payload).length === 0) {
      throw createError('Nenhum campo informado para atualização.', 400);
    }

    const updated = await repo.updateById(id, payload);
    if (!updated) throw createError('Mesa não encontrada.', 404);
    return updated;
  },

  async removeTable(id) {
    const deleted = await repo.deleteById(id);
    if (!deleted) throw createError('Mesa não encontrada.', 404);

    // Mesma regra de negócio: personagens vinculados não são excluídos junto
    // com a mesa, apenas voltam a ficar disponíveis (tableId: null).
    await repoCharacter.releaseCharactersFromTable(id);
  },
};
