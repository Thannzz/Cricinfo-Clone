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
  height: "auto",
  padding: "1rem",
  //   border: "1px solid red",
  display: "flex",
  //   borderBottom: "1px solid lightgrey",
};
const imgHover = {
  transform: "scale(1.05)",
  cursor: "pointer",
  borderRadius: "0.75rem",
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
const BraveSingle = () => {
  return (
    <Box style={mainBox}>
      <Box style={leftBox}>
        <Image
          _hover={imgHover}
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344700/344712.6.jpg"
          alt="strokes"
        />
      </Box>
      <Box style={rightBox}>
        <Heading style={heading1}>
          Women's Hundred shows sport's evolution on fast-forward
        </Heading>
        <Heading style={heading2}>
          Even dead rubbers are important for players seeking franchise
          contracts, writes Cameron Ponsonby
        </Heading>
      </Box>
    </Box>
  );
};

export default BraveSingle;
