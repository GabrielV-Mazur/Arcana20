import mongoose from 'mongoose';
import { Types } from 'mongoose';

const tableSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true,
  },   
  description: { 
    type: String,
    required: true,
  },
  categories: { 
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  characterIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  }],
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

export default Table;
