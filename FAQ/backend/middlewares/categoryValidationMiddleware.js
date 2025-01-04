import { body, param, validationResult } from "express-validator";
import CategoryModel from "../models/CategoryModel.js";
import FAQModel from "../models/FAQModel.js";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customError.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("No category")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("Not authorized")) {
          throw new UnauthorizedError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateCategory = withValidationErrors([
  body("name").notEmpty().withMessage("Name is Required"),
  body("description").notEmpty().withMessage("Description is Required"),
]);

export const validateCategoryIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const category = await CategoryModel.findById(value);
    if (!category) throw new NotFoundError(`no category with id : ${value}`);
  }),
]);

export const validateFAQ = withValidationErrors([
  body("question").notEmpty().withMessage("question is Required"),
  body("answer").notEmpty().withMessage("answer is Required"),
  body("category").notEmpty().withMessage("category is Required"),
]);

export const validateFAQIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const faq = await FAQModel.findById(value);
    if (!faq) throw new NotFoundError(`no faq with id : ${value}`);
  }),
]);
