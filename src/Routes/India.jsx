import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import IndiaLeft from "../Components/Teams/India/IndiaLeft";
import IndiaMid from "../Components/Teams/India/IndiaMid";
import IndiaRight from "../Components/Teams/India/IndiaRight";

const India = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="85%" height="auto" margin="auto">
        <IndiaLeft />
        <IndiaMid />
        <IndiaRight />
      </Box>
    </Box>
  );
};

export default India;
