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
  validateFAQ,
  validateFAQIdParam,
} from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllFAQ).post(validateFAQ, createFAQ);

router
  .route("/:id")
  .get(validateFAQIdParam, getFAQ)
  .patch(validateFAQ, validateFAQIdParam, updateFAQ)
  .delete(validateFAQIdParam, deleteFAQ);

export default router;
