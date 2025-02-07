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
import UserReg from "./Pages/userReg";

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
  path:"/userReg",element:<UserReg/>
    },
  ]);
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
