import React, { memo } from "react"
import { ActivityIndicator } from "react-native"
import styled from "styled-components/native"

function Button({ onPress, text, variant = "default", loading = false }) {
  return (
    <StyledButton onPress={onPress} variant={variant}>
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <StyledButtonText>{text}</StyledButtonText>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${p =>
    p.variant === "primary"
      ? "rgba(255, 255, 255, 0.7)"
      : p.theme.colorTransparent};
  border-radius: ${p => p.theme.borderRadius};
`

const StyledButtonText = styled.Text`
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSmall};
  letter-spacing: ${p => p.theme.letterSpacing};
`

export default memo(Button)
