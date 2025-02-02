import CategoryModel from "../models/CategoryModel.js";
import { StatusCodes } from "http-status-codes";
import FAQModel from "../models/FAQModel.js";

export const getAllCategories = async (req, res) => {
  const searchQuery = req.query.search || "";
  const categories = await CategoryModel.find({
    name: { $regex: searchQuery, $options: "i" },
  });
  res.status(StatusCodes.OK).json({ categories });
};

export const createCategory = async (req, res) => {
  const { name, description } = req.body;
  const category = await CategoryModel.create({ name, description });
  res.status(StatusCodes.OK).json({ category });
};

export const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    return res.status(404).json({ msg: `no category with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ category });
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await FAQModel.deleteMany({ categoryId: id });
  const removedCategory = await CategoryModel.findByIdAndDelete(id);

  if (!removedCategory) {
    return res.status(404).json({ msg: `no category with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ job: removedCategory });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;

  const updatedCategory = await CategoryModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedCategory) {
    return res.status(404).json({ msg: `no category with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ Category: updatedCategory });
};
