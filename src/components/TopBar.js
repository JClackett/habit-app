import React, { memo, useContext } from "react"
import styled from "styled-components/native"
import { AppContext } from "../app/context"

function TopBar() {
  const { user } = useContext(AppContext)
  return (
    <StyledHeader>
      <StyledUser>Hi, {user.firstName}</StyledUser>
      <StyledLogo>Habits this week</StyledLogo>
    </StyledHeader>
  )
}

export default memo(TopBar)

const StyledHeader = styled.View`
  width: 100%;
  padding: 50px 0;
  padding-bottom: 30px;
  background-color: ${p => p.theme.colorBackground};
`

const StyledUser = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
  padding: ${p => p.theme.paddingSmall} 0;
  padding-top: 0;
  font-size: ${p => p.theme.fontMedium};
`

const StyledLogo = styled.Text`
  font-weight: bold;
  color: white;
  font-size: ${p => p.theme.fontLarge};
`
