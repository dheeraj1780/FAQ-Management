import { Router } from "express";
const router = Router();

import { getFAQ, getAllFAQ } from "../controllers/faqController.js";
import { validateFAQIdParam } from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllFAQ);

router.route("/:id").get(validateFAQIdParam, getFAQ);

export default router;
