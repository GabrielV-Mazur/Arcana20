import Product from '../models/table.model.js';

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
};
