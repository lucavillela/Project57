import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "O título é obrigatório."],
    maxlength: [60, "O título não pode ter mais de 60 caracteres."],
  },
  content: {
    type: String,
    required: [true, "O conteúdo é obrigatório."],
  },
  slug: {
    type: String,
    required: [true, "O slug é obrigatório para a URL."],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
