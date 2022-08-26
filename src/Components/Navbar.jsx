import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Menubar from "./Menubar";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#03A9F4",
};
const innerBox = {
  width: "80%",
  //   border: "1px solid red",
  height: "100%",
  margin: "auto",
  display: "flex",
};

const espn = {
  display: "flex",
  justifyContent: "center",
  width: "20% ",
  height: "100%",
  // border: "1px solid red",
  alignItems: "center",
};
const espnImg = { width: "138px", height: "20px" };

const menu = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid blue",
  height: "100%",
  width: "50%",
};

const Navbar = () => {
  return (
    <Box style={containerStyle}>
      <Box style={innerBox}>
        <Box style={espn}>
          <Link to="/">
            <Image
              style={espnImg}
              src="https://wassets.hscicdn.com/static/images/logo.png"
              alt="espnLogo"
            />
          </Link>
        </Box>

        <Box style={menu}>
          <Menubar />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
