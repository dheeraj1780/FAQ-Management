import mongoose from "mongoose";
import FAQ from "../models/FAQModel";
import { StatusCodes } from "http-status-codes";

export const createFAQ = async (res, req) => {
  const faq = await FAQ.create(req.body);
  res.status(StatusCodes.OK).json({ faq });
};

export const getFAQ = async (req, res) => {
  const faq = await FAQ.findById(req.params.id);
  res.status(StatusCodes.OK).json({ faq });
};

export const updateFAQ = async (req, res) => {
  const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "faq modified", faq: updatedFAQ });
};

export const deleteFAQ = async (req, res) => {
  const removedFAQ = await FAQ.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "faq deleted", faq: removedFAQ });
};

export const getAllFAQ = async (res, req) => {
  const getall = await FAQ.find();
  res.status(StatusCodes.OK).json({ getall });
};
