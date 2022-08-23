import React from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

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

const MenuListHOver = {
  bg: "blue.100",
};
const MenuBtnHover = {
  bg: "blue.400",
};

const Navbar = () => {
  return (
    <Box style={containerStyle}>
      <Box style={innerBox}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            width: "20% ",
            height: "100%",
            border: "1px solid red",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "138px", height: "20px" }}
            src="https://wassets.hscicdn.com/static/images/logo.png"
            alt="espnLogo"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid blue",
            height: "100%",
            width: "80%",
          }}
        >
          <Menu>
            <MenuButton
              _hover={MenuBtnHover}
              style={{ width: "100%", height: "100%", color: "white" }}
            >
              Live Scores
            </MenuButton>
            <MenuList>
              <MenuItem _hover={MenuListHOver}>Live Score Home</MenuItem>
              <MenuItem _hover={MenuListHOver}>Week View</MenuItem>
              <MenuItem _hover={MenuListHOver}>Month View </MenuItem>
              <MenuItem _hover={MenuListHOver}>Season View</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              _hover={MenuBtnHover }
              style={{ width: "100%", height: "100%", color: "white" }}
            >
              Series
            </MenuButton>
            <MenuList>
              <MenuItem _hover={MenuListHOver}>Live Score Home</MenuItem>
              <MenuItem _hover={MenuListHOver}>Week View</MenuItem>
              <MenuItem _hover={MenuListHOver}>Month View </MenuItem>
              <MenuItem _hover={MenuListHOver}>Season View</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
