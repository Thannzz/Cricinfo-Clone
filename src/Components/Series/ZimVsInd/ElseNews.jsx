import { Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
const leftBox = {
  width: "35%",
  height: "100%",
  borderRadius: "0.75rem",
  overflow: "hidden",
};
const mainBox = {
  width: "100%",
  height: "150px",
  padding: "1rem",
  marginTop: "1rem",
  display: "flex",
};
const imgHover = {
  transform: "scale(1.05)",
  cursor: "pointer",
};

const rightBox = {
  marginLeft: "0.75rem",
  width: "65%",
  height: "100%",
};

const heading1 = {
  fontSize: "18px",
  fontWeight: "bold",
  paddingBottom: "0.5rem",
};

const heading2 = { fontSize: "16px", color: "#48494A", fontWeight: "normal" };

export const ElseNews = ({ data }) => {
  return (
    <Box boxShadow="md" rounded="xl" bg="white" style={mainBox}>
      <Box style={leftBox}>
        <Image _hover={imgHover} src={data.imgUrl} alt={data.id} />
      </Box>
      <Box style={rightBox}>
        <Heading style={heading1}>{data.heading}</Heading>
        <Heading style={heading2}>{data.desc}</Heading>
      </Box>
    </Box>
  );
};
