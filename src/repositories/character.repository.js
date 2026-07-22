import Character from '../models/table.model.js';

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
  
  updateById(id, data) {
    return Character.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return Character.findByIdAndDelete(id);
  },
};
import Product from '../models/table.model.js';

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
  
  updateById(id, data) {
    return Character.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return Character.findByIdAndDelete(id);
  },
};
