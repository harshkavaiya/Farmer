import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const FarmerLogin = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      identifier: "", // Phone or Email
      password: "",
    },
  });
  const navigate = useNavigate();
  const { FarmerLogin } = useAuthStore.getState();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    FarmerLogin(data, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Login with Email or Phone
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email / Phone */}
          <div>
            <label className="block text-gray-700">Email or Phone</label>
            <input
              type="text"
              {...register("identifier", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter email or phone"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Extra Options */}
        <div className="mt-4 text-center">
          <a href="#" className="text-green-600 hover:underline text-sm">
            Forgot Password?
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Don't have an account?
            <Link
              to="/farmer-signup"
              className="text-green-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerLogin;
