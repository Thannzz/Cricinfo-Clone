import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import WicketTakers from "./WicketTakers";
import { topWicketTkers, topRunsScorer } from "./ZimVsInd";

const heading = {
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: 1.7,
};
const viewBtn = {
  displayt: "flex",
  margin: "auto",
  color: "#03A9F4",
  fontSize: "14px",
  fontWeight: 700,
  margin: "1rem 0 0 5rem ",
};

const RightTopPlayers = () => {
  return (
    <Box
      style={{
        marginLeft: "1rem",
        width: "27%",
        height: "auto",
        border: "1px solid blue",
        // bg: "gray.50",
      }}
    >
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
        <Box padding="0.5rem" borderBottom="1px solid lightgray">
          <Heading style={heading}>Top Wicket Takers</Heading>
        </Box>
        {topWicketTkers.map((el) => (
          <WicketTakers data={el} />
        ))}
        <Box style={viewBtn}>View All Stats</Box>
      </Box>
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
        <Box padding="0.5rem" borderBottom="1px solid lightgray">
          <Heading style={heading}>TOP RUN SCORERS</Heading>
        </Box>
        {topRunsScorer.map((el) => (
          <WicketTakers data={el} />
        ))}
        <Box style={viewBtn}>View All Stats</Box>
      </Box>
    </Box>
  );
};

export default RightTopPlayers;
