import React from "react";
import { matchDeatils } from "./NewVsWi";
import { Box } from "@chakra-ui/react";
import ResultBox from "../ZimVsInd/ResultBox";

const mainBox = {
  width: "25%",
  height: "100%",
};

const viewBtn = {
  displayt: "flex",
  margin: "auto",
  color: "#03A9F4",
  fontSize: "14px",
  fontWeight: 700,
  margin: "0 0 0 4rem ",
};

const LefResBox = () => {
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

export default LefResBox;
