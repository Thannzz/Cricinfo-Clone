import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import SaLeft from "../Components/Teams/SouthAfrica/SaLeft";
import SaMid from "../Components/Teams/SouthAfrica/SaMid";
import SaRight from "../Components/Teams/SouthAfrica/SaRight";

const SouthAfrica = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <SaLeft />
        <SaMid />
        <SaRight />
      </Box>
    </Box>
  );
};

export default SouthAfrica;
