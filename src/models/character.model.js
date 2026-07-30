import mongoose from 'mongoose';
import { Types } from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },   
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: false,
      default: null,
    },
    classe: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    race: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

}, { timestamps: true });

const Character = mongoose.model('Character', characterSchema);

export default Character;
