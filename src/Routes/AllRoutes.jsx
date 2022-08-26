import React from "react";
import { Route, Routes } from "react-router-dom";
import AsiaCupQLFs from "./AsiaCupQLFs";
import AusVsZim from "./AusVsZim";
import EngVsSA from "./EngVsSA";
import Home from "./Home";
import NewVsWI from "./NewVsWI";
import PakVsNed from "./PakVsNed";
import ZimVsIndia from "./ZimVsIndia";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ZimVsInd" element={<ZimVsIndia />} />
      <Route path="/AsiaCupQLFs" element={<AsiaCupQLFs />} />
      <Route path="/NewVsWi" element={<NewVsWI />} />
      <Route path="/AusVsZim" element={<AusVsZim />} />
      <Route path="/PakVsNed" element={<PakVsNed />} />
      <Route path="/EngVsSA" element={<EngVsSA />} />
    </Routes>
  );
};

export default AllRoutes;
