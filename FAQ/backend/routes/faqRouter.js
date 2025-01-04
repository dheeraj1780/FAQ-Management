import { Router } from "express";
const router = Router();

import {
  createFAQ,
  getFAQ,
  deleteFAQ,
  updateFAQ,
  getAllFAQ,
} from "../controllers/faqController.js";
import { validateFAQ } from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllFAQ).post(validateFAQ, createFAQ);

router
  .route("/:id")
  .get(getFAQ)
  .patch(validateFAQ, updateFAQ)
  .delete(deleteFAQ);

export default router;
