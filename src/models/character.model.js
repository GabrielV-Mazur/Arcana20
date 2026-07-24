import mongoose from 'mongoose';
import { Types } from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true,
  },   
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
    classe: {
      type: String,
      required: true,
      trim: true,
    },
    race: {
      type: String,
      required: true,
      trim: true,
    },

}, { timestamps: true });

const Character = mongoose.model('Character', characterSchema);

export default Character;
