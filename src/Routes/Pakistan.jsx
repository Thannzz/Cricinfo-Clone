import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import PakLeft from "../Components/Teams/Pakistan/PakLeft";
import PakMId from "../Components/Teams/Pakistan/PakMId";
import PakRight from "../Components/Teams/Pakistan/PakRight";

const Pakistan = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <PakLeft />
        <PakMId />
        <PakRight />
      </Box>
    </Box>
  );
};

export default Pakistan;
