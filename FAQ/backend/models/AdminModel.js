import mongoose from "mongoose";

const AdminModel = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model("Admin", AdminModel);
