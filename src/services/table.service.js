import repo from '../repositories/table.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ name, description, categories }) {
  if (!name?.trim()) throw createError('Nome é obrigatório.', 400);
  if (!description?.trim()) throw createError('Descrição é obrigatória.', 400);
  if (!categories || !Array.isArray(categories) || categories.length === 0) throw createError('Categoria é obrigatória.', 400);
}

export default {
  async createTable(data) {
    ensureValidPayload(data);

    return repo.create({
      name: data.name.trim(),
      description: data.description.trim(),
      categories: data.categories,
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
      payload.name = payload.name.trim();
    }

    if (payload.description) {
      payload.description = payload.description.trim();
    }

    if (payload.categories) {
      payload.categories = payload.categories.map((c) => c.trim());
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
  },
};
