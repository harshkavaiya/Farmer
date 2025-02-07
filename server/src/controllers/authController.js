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

    const existingFarmer = await Farmer.findOne({
      $or: [{ phone }, { email }],
    });

    if (existingFarmer) {
      return res.status(200).json({
        success: false,
        message: "Farmer with this phone or email already exists!",
      });
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

    res
      .status(201)
      .json({ success: true, message: "Farmer registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const loginFarmer = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const existingFarmer = await Farmer.findOne({
      $or: [{ phone: identifier }, { email: identifier }],
    });

    if (!existingFarmer) {
      return res.status(200).json({
        success: false,
        message: "Farmer not found!",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingFarmer.password
    );

    if (!isPasswordValid) {
      return res.status(200).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    generateToken(existingFarmer._id, res);

    res.status(200).json({
      success: true,
      message: "Login successful!",
      farmer: {
        id: existingFarmer._id,
        name: existingFarmer.name,
        phone: existingFarmer.phone,
        email: existingFarmer.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json({ success: true, farmerDetails: req.farmer });
  } catch (error) {
    console.log("error in checkAuth controller: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
