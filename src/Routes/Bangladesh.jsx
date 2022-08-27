import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Inthespot from "../Components/Slides/Inthespot";
import BangLeft from "../Components/Teams/Bangladesh/BangLeft";
import BangMIddle from "../Components/Teams/Bangladesh/BangMIddle";
import BangRight from "../Components/Teams/Bangladesh/BangRight";

const Bangladesh = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="85%" height="auto" margin="auto">
        <BangLeft />
        <BangMIddle />
        <BangRight />
      </Box>
    </Box>
  );
};

export default Bangladesh;
