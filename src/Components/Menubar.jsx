import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuListHOver = {
  bg: "blue.100",
};
const MenuBtnHover = {
  bg: "blue.400",
};

const menuBtn = { width: "100%", height: "100%", color: "white" };

const Menubar = () => {
  return (
    <>
      <Menu>
        <MenuButton _hover={MenuBtnHover} style={menuBtn}>
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
        <MenuButton _hover={MenuBtnHover} style={menuBtn}>
          Series
        </MenuButton>
        <MenuList>
          <Link to="/ZimVsInd">
            <MenuItem _hover={MenuListHOver}>Zimbabwe vs India</MenuItem>
          </Link>
          <Link to="/NewVsWi">
            <MenuItem _hover={MenuListHOver}>
              West Indies vs New Zealand
            </MenuItem>
          </Link>
          <Link to="/AusVsZim">
            <MenuItem _hover={MenuListHOver}>Australia vs Zimbabwe </MenuItem>
          </Link>

          <Link to="/AsiaCupQLFs">
            <MenuItem _hover={MenuListHOver}>Asia Cup QLFs</MenuItem>
          </Link>
          <Link to="/EngVsSA">
            <MenuItem _hover={MenuListHOver}>England vs South Africa</MenuItem>
          </Link>

          <Link to="/PakVsNed">
            <MenuItem _hover={MenuListHOver}>Netherland vs Pakistan</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton _hover={MenuBtnHover} style={menuBtn}>
          Teams
        </MenuButton>
        <MenuList>
          <Link to="/Australia">
            <MenuItem _hover={MenuListHOver}>Australia</MenuItem>
          </Link>
          <Link to="/Bangladesh">
            <MenuItem _hover={MenuListHOver}>Bangladesh</MenuItem>
          </Link>
          <Link to="/England">
            <MenuItem _hover={MenuListHOver}>England</MenuItem>
          </Link>
          <Link to="/India">
            <MenuItem _hover={MenuListHOver}>India</MenuItem>
          </Link>
          <Link to="/NewZealand">
            <MenuItem _hover={MenuListHOver}>New Zealand</MenuItem>
          </Link>

          <MenuItem _hover={MenuListHOver}>Pakistan</MenuItem>
          <MenuItem _hover={MenuListHOver}>South Africa</MenuItem>
          <MenuItem _hover={MenuListHOver}>Sri Lanka</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton _hover={MenuBtnHover} style={menuBtn}>
          News
        </MenuButton>
        <MenuList>
          <MenuItem _hover={MenuListHOver}>News Home</MenuItem>
          <MenuItem _hover={MenuListHOver}>Future og ODIs</MenuItem>
          <MenuItem _hover={MenuListHOver}>Ball-Tampering</MenuItem>
          <MenuItem _hover={MenuListHOver}>Technology in Cricket</MenuItem>
          <MenuItem _hover={MenuListHOver}>Racism</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton _hover={MenuBtnHover} style={menuBtn}>
          Stats
        </MenuButton>
        <MenuList>
          <MenuItem _hover={MenuListHOver}>Stats Home</MenuItem>
          <MenuItem _hover={MenuListHOver}>IPL 2022</MenuItem>
          <MenuItem _hover={MenuListHOver}>Superstars</MenuItem>
          <MenuItem _hover={MenuListHOver}>All Records</MenuItem>
          <MenuItem _hover={MenuListHOver}>Grounds</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Menubar;
