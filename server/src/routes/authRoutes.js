import express from "express";
import { loginFarmer, registerFarmer } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerFarmer);
router.post("/signin", loginFarmer);

export default router;
