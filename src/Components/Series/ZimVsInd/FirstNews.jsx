import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
const FirstNews = ({ data }) => {
  return (
    <Box
      ml="1rem"
      w="98%"
      h="auto"
      paddingBottom="1rem"
      // borderBottom="1px solid lightgrey"
    >
      <Box
        w="100%"
        h="356px"
        // border="1px solid red"
        marginTop="2rem"
        overflow="hidden"
        borderTopLeftRadius="0.75rem"
        borderTopRightRadius="0.75rem"
      >
        <Image
          src={data.imgUrl}
          alt={data.id}
          transition="transform .2s"
          _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
        />
      </Box>

      <Box
        mt="-1.1rem"
        w="100%"
        h="150px"
        bgColor="black"
        color="white"
        borderBottomLeftRadius="0.75rem"
        borderBottomRightRadius="0.75rem"
      >
        <Heading as="h1" size="lg" p="1rem">
          {data.heading}{" "}
        </Heading>
        <Heading
          fontSize="16px"
          mt="-1.5rem"
          fontWeight="normal"
          color="#DCDDDF"
          p="1rem"
        >
          {data.desc}
        </Heading>
      </Box>
    </Box>
  );
};

export default FirstNews;
