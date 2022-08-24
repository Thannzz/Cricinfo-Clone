import { Box } from "@chakra-ui/react";
import React from "react";
import AddCompoenent from "./AddCompoenent";
import KeySeries from "./KeySeries";

const mainBox = {
  width: "25%",
  height: "100%",
  border: "1px solid blue",
  bg: "gray.50",
};

export const LeftBox = () => {
  return (
    <Box style={mainBox}>
      <AddCompoenent />
      <KeySeries />
    </Box>
  );
};
