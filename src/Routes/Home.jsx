import React from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import Inthespot from "../Components/Slides/Inthespot";
import HomeNews from "../Components/Homenews/HomeNews";

const Home = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <HomeNews />
    </Box>
  );
};

export default Home;
