import express from "express";
const router = express.Router();
import {
    createBrand,
    updateBrand,
    removeBrand,
    listBrand,
    readBrand,
} from "../controllers/brandController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, authorizeAdmin, createBrand);
router.route("/:brandId").put(authenticate, authorizeAdmin, updateBrand);
router
    .route("/:brandId")
    .delete(authenticate, authorizeAdmin, removeBrand);

router.route("/brands").get(listBrand);
router.route("/:id").get(readBrand);

export default router;
