import React, { memo, useContext } from "react"
import { Animated, PanResponder } from "react-native"
import styled from "styled-components/native"
import { AppContext } from "../app/context"

function TopBar({ startDate, prevWeek, nextWeek }) {
  const { user } = useContext(AppContext)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 0) {
        if (prevWeek) prevWeek()
      } else if (gestureState.dx < 0) {
        if (nextWeek) nextWeek()
      }
    },
  })
  return (
    <Animated.View {...panResponder.panHandlers}>
      <StyledHeader>
        <StyledUser>Hi, {user.firstName}</StyledUser>
        <StyledLogo>Habits this week</StyledLogo>
        <StyledWeek>Week {startDate.week()}</StyledWeek>
      </StyledHeader>
    </Animated.View>
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

const StyledWeek = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
  padding: 0;
  font-size: ${p => p.theme.fontLarge};
`
