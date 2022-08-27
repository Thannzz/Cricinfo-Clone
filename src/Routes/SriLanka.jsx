import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import SlLeft from "../Components/Teams/SriLanka/SlLeft";
import SlMid from "../Components/Teams/SriLanka/SlMid";
import SlRight from "../Components/Teams/SriLanka/SlRight";

const SriLanka = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <SlLeft />
        <SlMid />
        <SlRight />
      </Box>
    </Box>
  );
};

export default SriLanka;
