import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const HotTopic = () => {
  return (
    <Box
      ml="1rem"
      w="98%"
      h="auto"
      paddingBottom="1rem"
      borderBottom="1px solid lightgrey"
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
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/334000/334002.7.jpg"
          alt="kholi"
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
          Scenes from Dubai - Kohli-Babar bromance, and India's intense nets
        </Heading>
        <Heading
          fontSize="16px"
          mt="-1.5rem"
          fontWeight="normal"
          color="#DCDDDF"
          p="1rem"
        >
          The initial setting resembled a college adda before balls were
          repeatedly smashed out of the stadium
        </Heading>
      </Box>
    </Box>
  );
};

export default HotTopic;
