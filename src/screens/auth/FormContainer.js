import React from "react"
import styled from "styled-components/native"

function FormContainer({ children }) {
  return <StyledForm>{children}</StyledForm>
}

const StyledForm = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${p => p.theme.paddingMedium};
`
export default FormContainer
