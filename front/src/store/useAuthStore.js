import { create } from "zustand";
import AxiosInstance from "../lib/axiosInstance";
import Cookies from "js-cookie";

const getStoredAuthUser = () => {
  try {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing authUser from localStorage:", error);
    return null;
  }
};

const useAuthStore = create((set, get) => ({
  authUser: getStoredAuthUser(),
  isLogin: !!Cookies.get("token"),
  isLoading: true,

  FarmerSignup: async (data, navigate) => {
    try {
      let res = await AxiosInstance.post("/api/auth/signup", data);
      if (res.data.success) {
        alert(res.data.message);
        // console.log(res.data);
        navigate("/farmer-signin");
      } else {
        alert(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      console.log("error in farmer-signup : ", error);
    }
  },

  FarmerLogin: async (data, navigate) => {
    try {
      let res = await AxiosInstance.post("/api/auth/signin", data);
      if (res.data.success) {
        alert(res.data.message);
        console.log(res.data);
        set({ authUser: res.data.user, isLogin: true });
        localStorage.setItem("authUser", JSON.stringify(res.data.farmer));
        navigate("/");
      } else {
        alert(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      console.log("error in farmer-signin : ", error);
    }
  },
  checkAuth: async () => {
    try {
      let res = await AxiosInstance.post("/api/auth/checkauth");
      if (res.data.success) {
        set({
          authUser: res.data.farmerDetails,
          isLoading: false,
          isLogin: true,
        });
        localStorage.setItem(
          "authUser",
          JSON.stringify(res.data.farmerDetails)
        );
      } else {
        set({ isLogin: false, authUser: null });
        localStorage.removeItem("authUser");
      }
    } catch (error) {
      console.log("error in farmer-checkauth : ", error);
    }
  },
  UserSignUp: async (data) => {
    try {
      let res = await AxiosInstance.post("/api/auth/userSignup", data);

      if (res.data.success) {
        alert(res.data.message);
        console.log(res.data);
        set({ authUser: res.data, isLogin: true });
      } else {
        alert(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      console.log("error while userSignup", error);
    }
  },
}));

export default useAuthStore;
