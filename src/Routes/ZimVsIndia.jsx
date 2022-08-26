import React from "react";
import { Box } from "@chakra-ui/react";
import LeftResultBox from "../Components/Series/ZimVsInd/LeftResultBox";
import MIddleHIghlights from "../Components/Series/ZimVsInd/MIddleHIghlights";
import RightTopPlayers from "../Components/Series/ZimVsInd/RightTopPlayers";
import Inthespot from "../Components/Slides/Inthespot";
import Navbar from "../Components/Navbar";
const ZimVsIndia = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <LeftResultBox />
        <MIddleHIghlights />
        <RightTopPlayers />
      </Box>
    </Box>
  );
};

export default ZimVsIndia;
