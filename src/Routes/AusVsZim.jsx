import { Box } from "@chakra-ui/react";
import React from "react";
import AddCompoenent from "../Components/Homenews/LeftComponent/AddCompoenent";
import Navbar from "../Components/Navbar";
import LefResult from "../Components/Series/AusVsZim/LefResult";
import MidleNewBox from "../Components/Series/AusVsZim/MidleNewBox";
import Inthespot from "../Components/Slides/Inthespot";

const AusVsZim = () => {
  return (
    <Box bg="gray.50">
      <Inthespot />
      <Navbar />
      <Box display="flex" width="80%" height="auto" margin="auto">
        <LefResult />
        <MidleNewBox />
        <Box
          style={{
            marginLeft: "1rem",
            width: "27%",
            height: "auto",
          }}
        >
          <AddCompoenent />
        </Box>
      </Box>
    </Box>
  );
};

export default AusVsZim;
