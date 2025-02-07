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
  ]);
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
