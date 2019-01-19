import React, { memo } from "react"
import styled from "styled-components/native"

function Loading() {
  return <StyledContainer />
}
const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colorBackground};
`

export default memo(Loading)
