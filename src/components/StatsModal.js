import React, { memo } from "react"
import styled from "styled-components/native"
import { VictoryBar } from "victory-native"

import Modal from "./Modal"

function StatsModal(props) {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ]
  return (
    <Modal
      title="Stats"
      closeText="done"
      onCloseModal={props.onCloseModal}
      open={props.open}
    >
      <StyledWrapper>
        <VictoryBar
          style={{ data: { fill: "#eee" } }}
          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="earnings"
        />
      </StyledWrapper>
    </Modal>
  )
}

const StyledWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export default memo(StatsModal)
