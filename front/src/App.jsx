import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import FarmerReg from "./Pages/FarmerReg";
import FarmerLogin from "./Pages/FarmerLogin";
import Home from "./Pages/Home";
import Mainlayout from "./Layout/Mainlayout";
import useAuthStore from "./store/useAuthStore";

const App = () => {
  const { isLogin, checkAuth } = useAuthStore.getState();

  useEffect(() => {
    checkAuth();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: isLogin ? <Mainlayout /> : <Navigate to="/farmer-signin" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/farmer-signup",
      element: isLogin ? <Navigate to="/" /> : <FarmerReg />,
    },
    {
      path: "/farmer-signin",
      element: isLogin ? <Navigate to="/" /> : <FarmerLogin />,
    },
    {
      path: "/userReg",
      element: <UserReg />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
