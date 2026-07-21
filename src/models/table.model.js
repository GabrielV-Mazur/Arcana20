import mongoose from 'mongoose';

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
  categories: [{ 
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  }],
}, { timestamps: true });

const Table = mongoose.model('Table', tableSchema);

export default Table;
