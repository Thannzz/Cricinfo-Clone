import React from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import Inthespot from "../Components/Slides/Inthespot";

const Home = () => {
  return (
    <Box>
      <Inthespot />
      <Navbar />
    </Box>
  );
};

export default Home;
