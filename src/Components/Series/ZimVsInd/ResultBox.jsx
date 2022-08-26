import { Box, Image } from "@chakra-ui/react";
import React from "react";

const res = {
  lineHeight: "1.25rem",
  fontWeight: 700,
  fontSize: "10px",
  color: "#48494A",
};
const odi = {
  fontSize: "10px",
  color: "#6C6D6F",
};
const teamBox = {
  display: "flex",
  justifyContent: "space-Between",
  margin: "1rem 0",
};
const flag = {
  width: "20px",
  height: "20px",
};
const teamname1 = {
  fontWeight: 700,
  fontSize: "12px",
  color: "#2B2C2D",
  margin: "auto 10px",
};
const ResultBox = ({ data }) => {
  // console.log(data.live)
  return (
    <Box style={{ borderBottom: "1px solid lightgrey", marginBottom: "1rem" }}>
      <Box style={res}>{data.live}</Box>
      <Box style={odi}>{data.match}</Box>
      <Box style={teamBox}>
        <Box display="flex">
          <Box>
            <Image style={flag} src={data.team1Img} alt={data.team1Img} />
          </Box>
          <Box style={teamname1}>{data.team1}</Box>
        </Box>
        <Box style={teamname1}>{data.team1Score}</Box>
      </Box>
      <Box style={teamBox}>
        <Box display="flex">
          <Box>
            <Image style={flag} src={data.team2Img} alt={data.team2Img} />
          </Box>
          <Box style={teamname1}>{data.team2}</Box>
        </Box>
        <Box style={teamname1}>{data.team2Score}</Box>
      </Box>
    </Box>
  );
};

export default ResultBox;
