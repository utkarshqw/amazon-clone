import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../Pages/Authentican/Signin";
import Signup from "../Pages/Authentican/Signup";
import Detailspage from "../Pages/Detailspage";
import Homepage from "../Pages/Homepage";
import Productpage from "../Pages/Productpage";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/details/:id" element={<Detailspage />} />
      <Route path="*" element={<h1>null</h1>} />
    </Routes>
  );
};

export default Allroutes;
