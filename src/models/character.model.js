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

}, { timestamps: true });