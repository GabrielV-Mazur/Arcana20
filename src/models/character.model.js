import mongoose from 'mongoose';
import { Types } from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true,
  },   
   ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: "User",
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      ref: "User",
      required: "true",
    },
}, { timestamps: true });

const Character = mongoose.model('Character', characterSchema);

export default Character;
