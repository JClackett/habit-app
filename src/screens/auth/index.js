import React, { memo, useState } from "react"
import { Animated } from "react-native"
import styled from "styled-components/native"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import AuthUser from "../../graphql/user/AuthUser"
import useAnimation from "../../hooks/useAnimation"

function AuthScreen() {
  const [loginScreen, setLoginScreen] = useState(true)

  const leftValue = useAnimation({
    type: "spring",
    initialValue: 0,
    toValue: loginScreen ? 0 : 1,
    duration: 300,
  })

  return (
    <AuthUser>
      {(handleLogin, handleRegister) => (
        <StyledAuthWrapper>
          <StyledHeader>habit</StyledHeader>
          <Animated.View
            style={{
              alignSelf: "flex-start",
              width: "200%",
              flexDirection: "row",
              left: leftValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "-56%"],
                extrapoltate: "clamp",
              }),
            }}
          >
            <LoginForm onFormSubmit={data => handleLogin(data)} />
            <RegisterForm onFormSubmit={data => handleRegister(data)} />
          </Animated.View>
          <StyledNavigatorButton onPress={() => setLoginScreen(!loginScreen)}>
            <StyledNavigator>
              {loginScreen ? "register" : "login"}
            </StyledNavigator>
          </StyledNavigatorButton>
        </StyledAuthWrapper>
      )}
    </AuthUser>
  )
}

const StyledAuthWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${p => p.theme.colorBackground};
`
const StyledHeader = styled.Text`
  position: absolute;
  color: white;
  top: 50px;
  left: 0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontLarge};
  letter-spacing: ${p => p.theme.letterSpacing};
`

const StyledNavigatorButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
`
const StyledNavigator = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSmall};
  letter-spacing: ${p => p.theme.letterSpacing};
`

export default memo(AuthScreen)
