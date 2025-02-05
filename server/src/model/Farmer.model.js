import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    no: { type: String, required: true, unique: true },
    add: { type: String, required: true },
    certificate: { type: String, required: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },

    land: {
      size: { type: Number, required: true },
      type: { type: String, required: true },
      own: { type: Boolean, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Farmer", farmerSchema);
