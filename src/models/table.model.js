import mongoose from 'mongoose';
import { Types } from 'mongoose';

const tableSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },   
  description: { 
    type: String,
    required: true,
    maxlength: 500,
  },
  categories: { 
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    maxlength: 50,
  },
  characterIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  }],
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

export default Table;
