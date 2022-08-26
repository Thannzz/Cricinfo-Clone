import { Box } from '@chakra-ui/react'
import React from 'react'
import { ElseNews } from '../ZimVsInd/ElseNews'
import FirstNews from '../ZimVsInd/FirstNews'
import { news } from './AusVsZim'

const MidleNewBox = () => {
  return (
    <Box style={{ width: "55%", height: "100%" }}>
      {news.map((el) =>
        el.id === 1 ? <FirstNews data={el} /> : <ElseNews data={el} />
      )}
    </Box>
  )
}

export default MidleNewBox