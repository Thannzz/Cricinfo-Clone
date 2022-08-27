import { Box } from "@chakra-ui/react";
import React from "react";
import { ElseNews } from "../../Series/ZimVsInd/ElseNews";
import FirstNews from "../../Series/ZimVsInd/FirstNews";
import { news } from "./Eng";

const EngMid = () => {
  return (
    <Box style={{ width: "55%", height: "100%" }}>
      {news.map((el) =>
        el.id === 1 ? <FirstNews data={el} /> : <ElseNews data={el} />
      )}
    </Box>
  );
};

export default EngMid;
