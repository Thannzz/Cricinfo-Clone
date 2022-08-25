import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const mainBox = {
  width: "100%",
  height: "auto",
  padding: "1rem",
  display: "flex",
  gap: 15,
};
const imgBox = {
  width: "100%",
  height: "auto",

  overflow: "hidden",
  borderRadius: "0.75rem",
};
const innerBox = {
  width: "33%",
  height: "100%",
};

const heading = {
  fontSize: "14px",
  color: "#2B2C2D",
  fontWeight: "500",
  lineHeight: "1.4",
  padding: "0.5rem",
};
const ThreeComponent = () => {
  return (
    <Box style={mainBox}>
      <Box style={innerBox}>
        <Box style={imgBox}>
          <Image
            transition="transform .2s"
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            style={{ borderRadius: "0.75rem" }}
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/341100/341128.6.jpg"
            alt="pant"
          />
        </Box>
        <Box>
          <Heading style={heading}>
            Posers for India: The same old top three? Pant or Karthik, or both?
          </Heading>
        </Box>
      </Box>
      <Box style={innerBox}>
        <Box style={imgBox}>
          <Image
            transition="transform .2s"
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            style={{ borderRadius: "0.75rem" }}
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/238000/238059.3.jpg"
            alt="pant"
          />
        </Box>
        <Box>
          <Heading style={heading}>Big Battles - Mushfiqur vs Hardik</Heading>
        </Box>
      </Box>
      <Box style={innerBox}>
        <Box style={imgBox}>
          <Image
            transition="transform .2s"
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            style={{ borderRadius: "0.75rem" }}
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/290700/290789.6.jpg"
            alt="pant"
          />
        </Box>
        <Box>
          <Heading style={heading}>
            Wasim Akram - 'Pakistan Team is on the rise'
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default ThreeComponent;
