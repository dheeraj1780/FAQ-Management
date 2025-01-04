import { Router } from "express";
const router = Router();

import {
  createFAQ,
  getFAQ,
  deleteFAQ,
  updateFAQ,
  getAllFAQ,
} from "../controllers/faqController.js";
import {
  validateCategory,
  validateIdParam,
} from "../middlewares/categoryValidationMiddleware.js";

router.route("/").get(getAllFAQ).post(validateCategory, createFAQ);

router
  .route("/:id")
  .get(validateIdParam, getFAQ)
  .patch(validateCategory, validateIdParam, updateFAQ)
  .delete(validateIdParam, deleteFAQ);

export default router;
