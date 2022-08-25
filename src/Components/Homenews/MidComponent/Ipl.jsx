import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import ThreeComponent from "./ThreeComponent";

const headingbox = {
  h: "40px",
  w: "100%",
  borderBottom: "1px solid gray",
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

const Ipl = () => {
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
        <Heading style={heading1}>IPL 2023</Heading>
        <Heading style={heading2}>PUNJAB KINGS NEWS</Heading>
      </Box>
      <Box style={imgBox}>
        <Image
          style={{ borderRadius: "0.75rem" }}
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/336800/336846.6.jpg"
          alt="punjab"
          transition="transform .2s"
          _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
        />
      </Box>
      <Box>
        <Heading as="h1" size="md" p="1rem">
          Punjab Kings part ways with Anil Kumble and look for new head coach
        </Heading>
        <Heading
          fontSize="14px"
          mt="-1.5rem"
          fontWeight="normal"
          color="#48494A"
          p="1rem"
        >
          Franchise denies report quoting unnamed officials speculating on
          Mayank Agarwal's future as captain
        </Heading>
      </Box>
    </Box>
  );
};

export default Ipl;
