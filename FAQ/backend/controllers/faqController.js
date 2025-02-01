import mongoose from "mongoose";
import CategoryModel from "../models/CategoryModel.js";
import FAQModel from "../models/FAQModel.js";
import { StatusCodes } from "http-status-codes";

export const createFAQ = async (req, res) => {
  const faq = await FAQModel.create(req.body);
  res.status(StatusCodes.OK).json({ faq });
};

export const getFAQ = async (req, res) => {
  const { id } = req.params;

  // Convert ID to ObjectId
  const objectId = new mongoose.Types.ObjectId(id);

  // Find FAQ by ID and join with categories
  const faq = await FAQModel.aggregate([
    { $match: { _id: objectId } }, // Match the specific FAQ
    {
      $lookup: {
        from: "categories", // Collection to join
        localField: "categoryId", // Field in FAQModel
        foreignField: "_id", // Field in CategoryModel
        as: "categoryDetails", // Output field
      },
    },
    { $unwind: "$categoryDetails" }, // Convert array to object
    {
      $project: {
        question: 1,
        answer: 1,
        categoryDetails: {
          _id: "$categoryDetails._id", // Include category ID
          name: "$categoryDetails.name", // Include category name
        },
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ]);

  if (!faq || faq.length === 0) {
    return res.status(404).json({ message: "FAQ not found" });
  }

  res.status(200).json({ faq: faq[0] }); // Return single FAQ object
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
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const { category, words } = req.query;
  console.log(category);

  // Build search query
  const matchQuery = {};
  if (category) {
    matchQuery.categoryId = new mongoose.Types.ObjectId(category); // Convert to ObjectId
  }
  if (words) {
    matchQuery.$or = [
      { question: { $regex: words, $options: "i" } },
      { answer: { $regex: words, $options: "i" } },
    ];
  }

  // Aggregate with $lookup
  const faq = await FAQModel.aggregate([
    { $match: matchQuery }, // Apply filters
    {
      $lookup: {
        from: "categories", // Collection to join
        localField: "categoryId", // Field in FAQModel
        foreignField: "_id", // Field in CategoryModel
        as: "categoryDetails", // Output field
      },
    },
    { $unwind: "$categoryDetails" }, // Convert array to object
    {
      $sort: { updatedAt: -1 },
    },
    {
      $project: {
        question: 1,
        answer: 1,
        categoryDetails: {
          _id: "$categoryDetails._id", // Include category ID
          name: "$categoryDetails.name", // Include category name
        },
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ])
    .skip(skip)
    .limit(limit);

  console.log(faq);
  // Get the total count
  const totalFaq = await FAQModel.countDocuments(matchQuery);
  const numofPages = Math.ceil(totalFaq / limit);

  res.status(200).json({ totalFaq, numofPages, currentPage: page, faq });
};
