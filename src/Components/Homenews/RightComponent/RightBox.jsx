import React from "react";
import { Box } from "@chakra-ui/react";
import NewsHIghlight from "./NewsHIghlight";
import PostList from "./PostList";

const RightBox = () => {
  return (
    <Box
      style={{
        marginLeft: "1rem",
        width: "27%",
        height: "100%",
        // border: "1px solid blue",
      }}
    >
      <NewsHIghlight />
      <PostList />
    </Box>
  );
};

export default RightBox;
