import Character from '../models/character.model.js';

export default {
  create(data) {
    return Character.create(data);
  },
  findAll() {
    return Character.find();
  },

  findById(id) {
    return Character.findById(id);
  },

  // Personagem do mesmo usuário já vinculado a essa mesa (regra de 1 por mesa)
  findByUserAndTable(userId, tableId) {
    return Character.findOne({ userId, tableId });
  },
  
  updateById(id, data) {
    return Character.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return Character.findByIdAndDelete(id);
  },
  // Desvincula (não exclui) todos os personagens de uma mesa — usado quando a
  // mesa é removida ou quando um personagem sai/troca de mesa.
  releaseCharactersFromTable(tableId) {
    return Character.updateMany({ tableId }, { tableId: null });
  },
};
import Product from '../models/table.model.js';

