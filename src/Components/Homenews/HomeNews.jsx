import { Box } from "@chakra-ui/react";
import React from "react";
import { LeftBox } from "./LeftComponent/LeftBox";
import MIddleNews from "./MIddleNews";
import RightBox from "./RightBox";

const HomeNews = () => {
  return (
    <Box
      style={{
        margin: "auto",
        width: "80%",
        height: "auto",
        border: "1px solid red",
        display: "flex",
      }}
    >
      <LeftBox />
      <MIddleNews />
      <RightBox />
    </Box>
  );
};

export default HomeNews;
