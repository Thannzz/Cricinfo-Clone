import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import EngLeft from "../Components/Teams/England/EngLeft";
import EngMid from "../Components/Teams/England/EngMid";
import EngRight from "../Components/Teams/England/EngRight";

const England = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="85%" height="auto" margin="auto">
        <EngLeft />
        <EngMid />
        <EngRight />
      </Box>
    </Box>
  );
};

export default England;
