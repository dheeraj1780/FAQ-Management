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
  validateIdParam,
} from "../middlewares/categoryValidationMiddleware.js";

router.route("/").get(getAllCategories).post(validateCategory,createCategory);

router
  .route("/:id")
  .get(validateIdParam, getCategory)
  .patch(validateCategory, validateIdParam, updateCategory)
  .delete(validateIdParam, deleteCategory);

export default router;
