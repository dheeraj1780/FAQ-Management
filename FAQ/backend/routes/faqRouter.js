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
  validateIdParam,
} from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllFAQ).post(validateFAQ, createFAQ);

router
  .route("/:id")
  .get(validateIdParam, getFAQ)
  .patch(validateFAQ, validateIdParam, updateFAQ)
  .delete(validateIdParam, deleteFAQ);

export default router;
