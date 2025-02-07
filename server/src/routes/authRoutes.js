import express from "express";
import {
  checkAuth,
  loginFarmer,
  registerFarmer,
} from "../controllers/authController.js";
import { AuthRoute } from "../middleware/AuthRoute.js";

const router = express.Router();

router.post("/signup", registerFarmer);
router.post("/signin", loginFarmer);
router.post("/checkauth", AuthRoute, checkAuth);

export default router;
