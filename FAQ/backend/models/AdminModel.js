// import mongoose from "mongoose";

// const AdminModel = new mongoose.Schema(
//   {
//     username: String,
//     password: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Admin", AdminModel);

import mongoose from "mongoose";

// Define the Schema
const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Create and Export the Model
const AdminModel = mongoose.model("Admin", AdminSchema);
export default AdminModel;
