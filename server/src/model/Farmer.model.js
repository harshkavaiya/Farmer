import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    certificate: { type: String },
    password: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    land: {
      size: { type: String },
      surveyNo: { type: String },
      type: { type: String },
      own: { type: String },
    },
  },
  { timestamps: true }
);

const Farmer = mongoose.model("Farmer", farmerSchema);
export default Farmer;
