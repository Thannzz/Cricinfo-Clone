import { Image, Box, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

const AddCompoenent = () => {
  return (
    <Box
      boxShadow="md"
      p="10"
      rounded="lg"
      bg="white"
      width="95%"
      height="auto"
      margin="auto"
      mt="2rem"
    >
      <Image
        width="135px"
        height="65px"
        margin="0 0 10px 25px"
        src="https://wassets.hscicdn.com/static/images/nlp-logo.svg"
        alt="ask logo"
      />

      <Box
        mt="1rem"
        width="100"
        color="#48494A"
        fontSize="14px"
        textAlign="center"
      >
        Which batter has the highest average in men's ODIs (min 30 innings)?
      </Box>
      <Button
        width="100%"
        mt="1rem"
        rounded="3xl"
        variant="outline"
        style={{ color: "#03A9F4", border: "1px solid #03A9F4   " }}
      >
        <SearchIcon />
        {"   "}
        <Text ml="10%">Ask a question</Text>
      </Button>
    </Box>
  );
};

export default AddCompoenent;
