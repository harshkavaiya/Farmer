import express from "express";
import { registerFarmer } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerFarmer);

export default router;
