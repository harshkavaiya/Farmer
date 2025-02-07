import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connDB from "./lib/ConnDB.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Farmer Website API Running"));
app.use("/api/auth", authRoutes);
app.use("/api/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connDB();
});
