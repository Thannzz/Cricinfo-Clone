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
const AsiaCup = () => {
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
        <Heading style={heading1}>ASIA CUP 2022</Heading>
        <Heading style={heading2}>BUILD UP</Heading>
      </Box>
      <Box style={imgBox}>
        <Image
          style={{ borderRadius: "0.75rem" }}
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/330600/330686.6.jpg"
          alt="kholi"
          transition="transform .2s"
          _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
        />
      </Box>
      <Box style={{ borderBottom: "1px solid lightgray" }}>
        <Heading as="h1" size="md" p="1rem">
          Wasim suffers back pain in injury scare for Pakistan
        </Heading>
        <Heading
          fontSize="14px"
          mt="-1.5rem"
          fontWeight="normal"
          color="#48494A"
          p="1rem"
        >
          He is believed to have gone for MRI, with Shaheen Afridi already ruled
          out due to knee injury
        </Heading>
      </Box>
      <ThreeComponent />
    </Box>
  );
};

export default AsiaCup;
