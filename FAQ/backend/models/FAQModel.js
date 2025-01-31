import mongoose from "mongoose";

const FAQModel = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    categoryName: {
      // type: String,
      type: String,
      ref: "categories",
      required: true,
      trim: true,
    },
    // views: {
    //   type: Number,
    //   default: 0,
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FAQ", FAQModel);
