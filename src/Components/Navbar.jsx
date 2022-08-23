import React from "react";
import { Box, Image } from "@chakra-ui/react";

const containerStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#03A9F4",
};
const innerBox = {
  width: "80%",
  border: "1px solid red",
  height: "100%",
  margin: "auto",
};

const Navbar = () => {
  return (
    <Box style={containerStyle}>
      <Box style={innerBox}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            width: "150px",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "138px", height: "20px" }}
            src="https://wassets.hscicdn.com/static/images/logo.png"
            alt="espnLogo"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
