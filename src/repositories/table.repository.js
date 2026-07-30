import Table from '../models/table.model.js';

export default {
  create(data) {
    return Table.create(data);
  },
  findAll() {
    return Table.find();
  },

  findById(id) {
    return Table.findById(id);
  },
  
  updateById(id, data) {
    return Table.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return Table.findByIdAndDelete(id);
  },

  // $addToSet evita duplicar o mesmo personagem na lista caso a operação rode duas vezes
  addCharacter(tableId, characterId) {
    return Table.findByIdAndUpdate(tableId, { $addToSet: { characterIds: characterId } }, { new: true });
  },
  removeCharacter(tableId, characterId) {
    return Table.findByIdAndUpdate(tableId, { $pull: { characterIds: characterId } }, { new: true });
  },
};
