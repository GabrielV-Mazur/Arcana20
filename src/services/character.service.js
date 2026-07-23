import repo from '../repositories/character.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ name, ownerId }) {
  if (!name?.trim()) {
    throw createError('Nome é obrigatório.', 400);
  }

  if (!ownerId) {
    throw createError('Proprietário é obrigatório.', 400);
  }
}

export default {
  async createCharacter(data) {
    ensureValidPayload(data);

    return repo.create({
      name: data.name.trim(),
      ownerId: data.ownerId,
    });
  },

  async listCharacters() {
    return repo.findAll();
  },

  async getCharacter(id) {
    const character = await repo.findById(id);

    if (!character) {
      throw createError('Personagem não encontrado.', 404);
    }

    return character;
  },

  async updateCharacter(id, data) {
    const payload = { ...data };

    if (payload.name) {
      payload.name = payload.name.trim();
    }

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) {
        delete payload[key];
      }
    });

    if (Object.keys(payload).length === 0) {
      throw createError(
        'Nenhum campo informado para atualização.',
        400
      );
    }

    const updated = await repo.updateById(id, payload);

    if (!updated) {
      throw createError(
        'Personagem não encontrado.',
        404
      );
    }

    return updated;
  },

  async removeCharacter(id) {
    const deleted = await repo.deleteById(id);

    if (!deleted) {
      throw createError(
        'Personagem não encontrado.',
        404
      );
    }
  },
};