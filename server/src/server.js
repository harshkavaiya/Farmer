import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connDB from "./lib/ConnDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Farmer Website API Running"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connDB();
});
