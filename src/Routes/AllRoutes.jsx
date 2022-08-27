import React from "react";
import { Route, Routes } from "react-router-dom";
import AsiaCupQLFs from "./AsiaCupQLFs";
import Australia from "./Australia";
import AusVsZim from "./AusVsZim";
import Bangladesh from "./Bangladesh";
import England from "./England";
import EngVsSA from "./EngVsSA";
import Home from "./Home";
import India from "./India";
import NewVsWI from "./NewVsWI";
import NewZealand from "./NewZealand";
import Pakistan from "./Pakistan";
import PakVsNed from "./PakVsNed";
import SouthAfrica from "./SouthAfrica";
import SriLanka from "./SriLanka";
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
      <Route path="/Australia" element={<Australia />} />
      <Route path="/Bangladesh" element={<Bangladesh />} />
      <Route path="/England" element={<England />} />
      <Route path="/India" element={<India />} />
      <Route path="/NewZealand" element={<NewZealand />} />
      <Route path="/Pakistan" element={<Pakistan />} />
      <Route path="/SouthAfrica" element={<SouthAfrica />} />
      <Route path="/SriLanka" element={<SriLanka />} />
    </Routes>
  );
};

export default AllRoutes;
