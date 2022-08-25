import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  boxStyle,
  hoverStyle,
  iconStyle,
  textStyle,
} from "../../utils/LeftBoxSTyle";

const NewsHIghlight = () => {
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
          News Headlines
        </Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>BBL draft: Taylor, Hasnain in final batch</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Lynn signs 11-game Strikers BBL deal</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Shubman Gill set to play for Glamorgan</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Akram: Too early to compare Babar, Kohli</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>David Hemp to leave Pak Women job</Text>
      </Box>
      <Box _hover={hoverStyle} style={boxStyle}>
        <ChevronRightIcon style={iconStyle} />
        <Text style={textStyle}>Buzz: Rizwan shows off his shots</Text>
      </Box>
    </Box>
  );
};

export default NewsHIghlight;
