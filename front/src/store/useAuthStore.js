import { create } from "zustand";
import AxiosInstance from "../lib/axiosInstance";

const useAuthStore = create((set, get) => ({
  FarmerSignup: async (data) => {
    try {
      let res = await AxiosInstance.post("/api/auth/signup", data);
      if (res.data.success) {
        alert(res.data.message);
        console.log(res.data);
        set({ authUser: res.data, isLogin: true });
      } else {
        alert(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      console.log("error in farmer-signup : ", error);
    }
  },
}));

export default useAuthStore;
