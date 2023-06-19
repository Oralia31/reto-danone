import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Products from "../Pages/Products";
import Home from "../Pages/Home";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />{" "}
    </Routes>
  );
};

export default MainRouter;
