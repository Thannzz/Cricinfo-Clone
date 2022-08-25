import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import BraveSingle from "./BraveSingle";

const headingbox = {
  h: "40px",
  w: "100%",
  borderBottom: "1px solid lightgray",
  p: "1rem",
  mb: "0.5rem",
};

const heading1 = {
  fontSize: "12px",
  padding: "0.5rem 0 0.25rem 0.5rem",
};
const heading2 = {
  fontSize: "10px",
  padding: "0 0 0.5rem 0.5rem",
  color: "#6C6D6F",
  fontWeight: "normal",
};
const imgBox = {
  width: "100%",
  height: "auto",
  marginTop: "1rem",
  overflow: "hidden",
  borderRadius: "0.75rem",
};
const resultBox = {
  width: "100%",
  height: "auto",
  borderBottom: "1px solid lightgray",
  padding: "0.5rem",
};
const resultHead = {
  fontSize: "12px",
  color: "#48494A",
};
const team1 = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 1rem 1rem 0",
};
const teamName = {
  fontSize: "16px",
  paddingLeft: "1rem",
  color: "lightGray",
  fontWeight: 700,
  lineHeight: 1.5,
  textOpacity: 100,
};
const teamName2 = {
  fontSize: "16px",
  paddingLeft: "1rem",
  color: "black",
  fontWeight: 700,
  lineHeight: 1.5,
  textOpacity: 100,
};
const team2 = {
  margin: 0,
  display: "flex",
  justifyContent: "space-between",
};
const teamResult = {
  color: "grey",
  fontSize: "12px",
  paddingTop: "1rem",
};
const BraveVsRockets = () => {
  return (
    <Box
      boxShadow="md"
      rounded="xl"
      bg="white"
      width="100%"
      height="auto"
      margin="auto"
      mt="2rem"
      p="0.5rem"
    >
      <Box style={headingbox}>
        <Heading style={heading1}>BRAVE VS ROCKETS</Heading>
        <Heading style={heading2}>WOMEN'S HUNDRED 2022</Heading>
      </Box>
      <Box style={resultBox}>
        <Box>
          <Heading style={resultHead}>RESULT</Heading>
        </Box>
        <Box style={team1}>
          <Box display="flex">
            <Image
              style={{ width: "20px", height: "20px" }}
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317108.png"
              alt="team1"
            />
            <span /> <Heading style={teamName}>Trent Rockets (Women)</Heading>
          </Box>
          <Box style={teamName}>88/8</Box>
        </Box>
        <Box style={team2}>
          <Box display="flex">
            <Image
              style={{ width: "20px", height: "20px" }}
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317112.png"
              alt="team1"
            />
            <span /> <Heading style={teamName2}>Southern Brave (Women)</Heading>
          </Box>
          <Box style={teamName2}>94/0</Box>
        </Box>
        <Box style={teamResult}>
          Brave won by 10 wickets (with 44 balls remaining)
        </Box>
      </Box>
      <Box style={imgBox}>
        <Image
          style={{ borderRadius: "0.75rem" }}
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344700/344755.jpg"
          alt="brave"
          transition="transform .2s"
          _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
        />
      </Box>
      <Box style={{ borderBottom: "1px solid lightgray" }}>
        <Heading as="h1" size="md" p="1rem">
          Mandhana 57* plays its part as Brave make the playoffs
        </Heading>
        <Heading
          fontSize="14px"
          mt="-1.5rem"
          fontWeight="normal"
          color="#48494A"
          p="1rem"
        >
          Lauren Bell picked up 4 for 10 to skittle Trent Rockets
        </Heading>
      </Box>
      <BraveSingle />
    </Box>
  );
};

export default BraveVsRockets;
