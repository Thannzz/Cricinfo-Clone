import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Leftbox from "../Components/Series/PakVsNed/Leftbox";
import Middlenews from "../Components/Series/PakVsNed/Middlenews";
import RitTOpbox from "../Components/Series/PakVsNed/RitTOpbox";
import Inthespot from "../Components/Slides/Inthespot";

const PakVsNed = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <Leftbox />
        <Middlenews />
        <RitTOpbox />
      </Box>
    </Box>
  );
};

export default PakVsNed;
