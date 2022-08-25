import { Box } from "@chakra-ui/react";
import React from "react";
import HotTopic from "./HotTopic";
import SingleNews from "./SingleNews";

const MIddleNews = () => {
  return (
    <Box style={{ width: "55%", height: "100%" }}>
      <HotTopic />
      <SingleNews />
    </Box>
  );
};

export default MIddleNews;
