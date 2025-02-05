import Farmer from "../model/Farmer.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/generateToken.js";

export const registerFarmer = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      email,
      certificate,
      password,
      country,
      state,
      city,
      pincode,
      land,
    } = req.body;

    const existingFarmer = await Farmer.findOne({ phone });
    if (existingFarmer) {
      return res.status(400).json({ message: "Farmer already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFarmer = new Farmer({
      name,
      phone,
      email,
      address,
      certificate,
      password: hashedPassword,
      country,
      state,
      city,
      pincode,
      land,
    });

    await newFarmer.save();

    generateToken(newFarmer._id, res);

    res.status(201).json({ message: "Farmer registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
