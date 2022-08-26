import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  boxStyle,
  hoverStyle,
  iconStyle,
  textStyle,
} from "../../utils/LeftBoxSTyle";
import { Link } from "react-router-dom";

const KeySeries = () => {
  return (
    <Box
      boxShadow="md"
      rounded="xl"
      bg="white"
      width="95%"
      height="auto"
      margin="auto"
      mt="2rem"
      p="0.5rem"
    >
      <Box h="40px" w="100%" borderBottom="1px solid gray" p="1rem" mb="0.5rem">
        <Text mt="-5px" fontSize="12px" fontWeight="500">
          Key Series
        </Text>
      </Box>
      <Link to="ZimVsInd">
        <Box _hover={hoverStyle} style={boxStyle}>
          <ChevronRightIcon style={iconStyle} />
          <Text style={textStyle}>Zimbabwe v India</Text>
        </Box>
      </Link>

      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>West Indies s New Zealand</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Australia vs Zimbabwe</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Asia Cup</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>England vs South Africa</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Netherland vs Pakistan</Text>
      </Box>
    </Box>
  );
};

export default KeySeries;
