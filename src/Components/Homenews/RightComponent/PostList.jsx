import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Postdata } from "./NewsData";

const picBox = {
  w: "100%",
  h: "auto",
  borderRadius: "0.75rem",
  overflow: "hidden",
  marginTop: "0.5rem",
};
const img = {
  transition: "transform .2s",
  borderRadius: "0.75rem",
};

const imgHover = {
  transform: "scale(1.05)",
  cursor: "pointer",
};

// console.log(Postdata);
const PostList = () => {
  return (
    <Box
      boxShadow="md"
      rounded="xl"
      bg="white"
      width="95%"
      height="auto"
      margin="auto"
      mt="2rem"
      p="1rem"
    >
      {Postdata.map((el) => (
        <Box borderBottom="1px solid lightgrey" padding="1rem 0">
          <Box key={el.id} style={picBox}>
            <Image
              style={img}
              _hover={imgHover}
              alt={el.heading}
              src={el.pic}
            />
          </Box>
          <Heading mt="0.5rem" size="xs">
            {el.heading}
          </Heading>
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
