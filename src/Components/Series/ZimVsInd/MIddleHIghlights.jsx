import { Box } from "@chakra-ui/react";
import React from "react";
import { ElseNews } from "./ElseNews";
import FirstNews from "./FirstNews";
import { news } from "./ZimVsInd";
const MIddleHIghlights = () => {
  return (
    <Box style={{ width: "55%", height: "100%" }}>
      {news.map((el) =>
        el.id === 1 ? <FirstNews data={el} /> : <ElseNews data={el} />
      )}
    </Box>
  );
};

export default MIddleHIghlights;
