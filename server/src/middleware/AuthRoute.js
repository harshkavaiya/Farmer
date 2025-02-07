import jwt from "jsonwebtoken";
import Farmer from "../model/Farmer.model.js";

export const AuthRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({
        success: false,
        message: "unauthorized -no token provided",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.json({
        success: false,
        message: "unauthorized -Invalid token",
      });
    }
    const farmer = await Farmer.findById(decode.userId).select(
      "_id phone email status"
    );

    if (!farmer) {
      return res.json({ success: false, message: "user not found" });
    }
    req.farmer = farmer;
    next();
  } catch (error) {
    console.log("error in authRoute middleware: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
