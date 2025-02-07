import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FarmerReg from "./Pages/FarmerReg";
import Home from "./Pages/Home";
import Mainlayout from "./Layout/Mainlayout";
import FarmerLogin from "./Pages/FarmerLogin";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/farmer-signup",
      element: <FarmerReg />,
    },
    {
      path: "/farmer-signin",
      element: <FarmerLogin />,
    },
  ]);
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
