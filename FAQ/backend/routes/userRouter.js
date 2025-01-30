import { Router } from "express";
const router = Router();

import { getFAQ, getAllFAQ } from "../controllers/faqController.js";
import { getAllCategories } from "../controllers/categoryController.js";
import { validateFAQIdParam } from "../middlewares/validationMiddleware.js";

router.route("/faq").get(getAllFAQ);
router.route("/category").get(getAllCategories);
router.route("/:id").get(validateFAQIdParam, getFAQ);

export default router;
