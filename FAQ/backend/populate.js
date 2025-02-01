import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import FAQModel from "./models/FAQModel.js";
import CategoryModel from "./models/CategoryModel.js";
import AdminModel from "./models/AdminModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  const admin = await AdminModel.findOne({ username: "admin" });
  const jsonFaqs = JSON.parse(
    await readFile(new URL("./utils/faqData.json", import.meta.url))
  );
  const faqs = jsonFaqs.map((faq) => {
    return { ...faq };
  });
  await FAQModel.deleteMany({});
  await FAQModel.create(faqs);
  console.log("Success");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
