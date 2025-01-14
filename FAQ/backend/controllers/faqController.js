import CategoryModel from "../models/CategoryModel.js";
import FAQModel from "../models/FAQModel.js";
import { StatusCodes } from "http-status-codes";

export const createFAQ = async (req, res) => {
  const faq = await FAQModel.create(req.body);
  res.status(StatusCodes.OK).json({ faq });
};

export const getFAQ = async (req, res) => {
  const faq = await FAQModel.findById(req.params.id);
  res.status(StatusCodes.OK).json({ faq });
};

export const updateFAQ = async (req, res) => {
  const updatedFAQ = await FAQModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "faq modified", faq: updatedFAQ });
};

export const deleteFAQ = async (req, res) => {
  const removedFAQ = await FAQModel.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "faq deleted", faq: removedFAQ });
};

export const getAllFAQ = async (req, res) => {
  const { category, words } = req.query;
  const search = {};
  if (category) {
    const categoryId = await CategoryModel.findOne({ name: category });
    search.categoryId = categoryId._id;
  }

  if (words) {
    search.$or = [
      { question: { $regex: words, $options: "i" } },
      { answer: { $regex: words, $options: "i" } },
    ];
  }
  const getall = await FAQModel.find(search);
  res.status(StatusCodes.OK).json({ getall });
};
