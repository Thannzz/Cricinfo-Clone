import { Box } from "@chakra-ui/react";
import React from "react";
import AsiaCup from "./AsiaCup";
import BraveVsRockets from "./BraveVsRockets";
import HotTopic from "./HotTopic";
import Ipl from "./Ipl";
import SingleNews from "./SingleNews";

const MIddleNews = () => {
  return (
    <Box style={{ width: "55%", height: "100%" }}>
      <HotTopic />
      <SingleNews />
      <AsiaCup />
      <Ipl />
      <BraveVsRockets />
    </Box>
  );
};

export default MIddleNews;
