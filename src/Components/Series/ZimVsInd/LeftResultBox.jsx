import React from "react";
import { Box } from "@chakra-ui/react";
import ResultBox from "./ResultBox";
import { matchDeatils } from "./ZimVsInd";
const mainBox = {
  width: "25%",
  height: "100%",
  // border: "1px solid blue",
  // marginTop: "2rem",
  // bg: "gray.50",
};

const viewBtn = {
  displayt: "flex",
  margin: "auto",
  color: "#03A9F4",
  fontSize: "14px",
  fontWeight: 700,
  margin: "0 0 0 4rem ",
};

const LeftResultBox = () => {
  return (
    <Box style={mainBox}>
      <Box
        boxShadow="md"
        rounded="xl"
        bg="white"
        width="95%"
        height="auto"
        margin="auto"
        mt="2rem"
        p="0.5rem"
      >
        {matchDeatils.map((el) => (
          <ResultBox data={el} />
        ))}
        <Box style={viewBtn}>View All Results</Box>
      </Box>
    </Box>
  );
};

export default LeftResultBox;
