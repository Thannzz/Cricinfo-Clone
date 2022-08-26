import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import LefResBox from "../Components/Series/NewVsWI/LefResBox";
import MiddleNewBox from "../Components/Series/NewVsWI/MiddleNewBox";
import RiteTopBox from "../Components/Series/NewVsWI/RiteTopBox";
import Inthespot from "../Components/Slides/Inthespot";

const NewVsWI = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <LefResBox />
        <MiddleNewBox />
        <RiteTopBox />
      </Box>
    </Box>
  );
};

export default NewVsWI;
