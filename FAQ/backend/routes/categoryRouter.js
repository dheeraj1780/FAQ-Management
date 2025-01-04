import { Router } from "express";
const router = Router();

import {
  getAllCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import {
  validateCategory,
  validateCategoryIdParam,
} from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllCategories).post(validateCategory, createCategory);

router
  .route("/:id")
  .get(validateCategoryIdParam, getCategory)
  .patch(validateCategory, validateCategoryIdParam, updateCategory)
  .delete(validateCategoryIdParam, deleteCategory);

export default router;
