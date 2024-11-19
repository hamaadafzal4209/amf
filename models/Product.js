import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    images: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Main Distribution Boards",
        "Motor Control Centers",
        "Panel Boards",
      ],
    },
    features: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
