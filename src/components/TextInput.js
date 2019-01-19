import React, { useState, memo } from "react"
import styled from "styled-components/native"

function TextInput(props) {
  const [focused, setFocused] = useState(false)
  return (
    <StyledInputWrapper focused={focused} error={props.error}>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false)
          if (props.onBlur) props.onBlur()
        }}
      />
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  background-color: transparent;
  margin-bottom: ${p => p.theme.paddingMedium};
  border-bottom-color: ${p =>
    p.error
      ? p.theme.colorRed
      : p.focused
      ? "white"
      : p.theme.colorTransparent};
`

const StyledLabel = styled.Text`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: ${p => p.theme.paddingExtraSmall};
  letter-spacing: ${p => p.theme.letterSpacingSmall};
  font-size: ${p => p.theme.fontSmall};
`

const StyledInput = styled.TextInput`
  width: 100%;
  height: 40px;
  color: white;
  font-size: ${p => p.theme.fontMedium};
  padding: ${p => p.theme.paddingSmall};
`

export default memo(TextInput)
