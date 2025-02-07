import React from "react";
import { useForm } from "react-hook-form";
import useAuthStore from "../store/useAuthStore";
import { Link } from "react-router-dom";

const FarmerReg = () => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      certificate: "",
      password: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      land: {
        size: "",
        surveyNo: "",
        type: "",
        own: "",
      },
    },
  });

  const { FarmerSignup } = useAuthStore.getState();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    FarmerSignup(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Farmer Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" className="border" {...register("name")} required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="border"
            {...register("phone")}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="border"
            type="email"
            {...register("email")}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            className="border"
            {...register("address")}
            required
          />
        </div>
        <div>
          <label htmlFor="certificate">Certificate</label>
          <input
            id="certificate"
            className="border"
            {...register("certificate")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="border"
            type="password"
            {...register("password")}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            className="border"
            {...register("country")}
            required
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            id="state"
            className="border"
            {...register("state")}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input id="city" className="border" {...register("city")} required />
        </div>
        <div>
          <label htmlFor="pincode">Pincode</label>
          <input
            id="pincode"
            className="border"
            {...register("pincode")}
            required
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Land Details</h2>
          <div>
            <label htmlFor="land-size">Land Size</label>
            <input
              id="land-size"
              className="border"
              {...register("land.size")}
            />
          </div>
          <div>
            <label htmlFor="survey-no">Survey Number</label>
            <input
              id="survey-no"
              className="border"
              {...register("land.surveyNo")}
            />
          </div>
          <div>
            <label htmlFor="land-type">Land Type</label>
            <input
              id="land-type"
              className="border"
              {...register("land.type")}
            />
          </div>
          <div>
            <label htmlFor="land-own">Land Ownership</label>
            <select id="land-own" className="border" {...register("land.own")}>
              <option value="">Select ownership</option>
              <option value="owned">Owned</option>
              <option value="leased">Leased</option>
            </select>
          </div>
        </div>
        <Link to="/farmer-signin"></Link>
        <button type="submit" className="w-full bg-green-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FarmerReg;
