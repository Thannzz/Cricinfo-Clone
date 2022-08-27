import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import NzLeft from "../Components/Teams/NewZealand/NzLeft";
import NzMid from "../Components/Teams/NewZealand/NzMid";
import NzRight from "../Components/Teams/NewZealand/NzRight";

const NewZealand = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="85%" height="auto" margin="auto">
        <NzLeft />
        <NzMid />
        <NzRight />
      </Box>
    </Box>
  );
};

export default NewZealand;
