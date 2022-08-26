import React from "react";
import { Box } from "@chakra-ui/react";
import Inthespot from "../Components/Slides/Inthespot";
import Navbar from "../Components/Navbar";
import LeftResBox from "../Components/Series/AsiaCupQLFs/LeftResBox";
import MidNewsBox from "../Components/Series/AsiaCupQLFs/MidNewsBox";
import RightTopBox from "../Components/Series/AsiaCupQLFs/RightTopBox";

const AsiaCupQLFs = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <LeftResBox />
        <MidNewsBox />
        <RightTopBox />
      </Box>
    </Box>
  );
};

export default AsiaCupQLFs;
