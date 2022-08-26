import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import LeftB from "../Components/Series/EngVsSa/LeftB";
import MiddleB from "../Components/Series/EngVsSa/MiddleB";
import RightB from "../Components/Series/EngVsSa/RightB";
import Inthespot from "../Components/Slides/Inthespot";

const EngVsSA = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <LeftB />
        <MiddleB />
        <RightB />
      </Box>
    </Box>
  );
};

export default EngVsSA;
