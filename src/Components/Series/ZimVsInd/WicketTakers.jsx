import { Box, Image } from "@chakra-ui/react";
import React from "react";

const mainBox = {
  width: "100%",
  height: "auto",
  padding: "1rem",
  borderBottom: "1px solid lightgray",
  display: "flex",
};
const leftbox = {
  width: "35%",
  height: "100%",
};
const rightBox = {
  width: "65%",
  height: "100%",
};
const img = {
  border: "1px solid lightgray",
  borderRadius: "50%",
  width: "65px",
  height: "65px",
};
const namebox = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#2B2C2D",
};
const wicketbox = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2B2C2D",
};
const lastBox = {
  fontSize: "10px",
  color: "#6C6D6F",
  fontWeight: 500,
  padding: "0.25rem  0.5rem 0.5rem 0",
};
const WicketTakers = ({ data }) => {
  return (
    <Box style={mainBox}>
      <Box style={leftbox}>
        <Image style={img} src={data.imgUrl} alt={data.imgUrl} />
      </Box>
      <Box style={rightBox}>
        <Box style={namebox}>{data.name}</Box>
        <Box style={wicketbox}>{data.wicketsOrRuns}</Box>
        <Box display="flex">
          <Box style={lastBox}>Innings:{data.innings}</Box>
          <Box style={lastBox}>Average : {data.avg}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WicketTakers;
