import React, { memo } from "react"
import styled from "styled-components/native"

function Errors({ errors }) {
  return errors.map((error, i) => {
    return <Error key={i}>{error.message}</Error>
  })
}

const Error = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSmall};
  margin: ${p => p.theme.paddingSmall} 0;
  letter-spacing: ${p => p.theme.letterSpacingSmall};
`
export default memo(Errors)
