import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import AusLeft from "../Components/Teams/Australia/AusLeft";
import AusMIddle from "../Components/Teams/Australia/AusMIddle";
import AusRight from "../Components/Teams/Australia/AusRight";

const Australia = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="85%" height="auto" margin="auto">
        <AusLeft />
        <AusMIddle />
        <AusRight />
      </Box>
    </Box>
  );
};

export default Australia;
