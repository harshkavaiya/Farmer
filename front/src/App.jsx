import React from "react";
import { Routes, Route } from "react-router-dom";
import FarmerReg from "./Pages/FarmerReg";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmer-reg" element={<FarmerReg />} />
    </Routes>
  );
};

export default App;
