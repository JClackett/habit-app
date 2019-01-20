import React, { useState } from "react"
import { Animated } from "react-native"
import useAnimation from "../../hooks/useAnimation"

function FormContainer({ children }) {
  const [focusedForm, setFocusedForm] = useState(0)

  const topValue = useAnimation({
    type: "timing",
    initialValue: -50,
    toValue: focusedForm,
    duration: 200,
  })

  return (
    <Animated.View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 20,
        top: topValue.interpolate({
          inputRange: [0, 300],
          outputRange: [0, -300],
          extrapoltate: "clamp",
        }),
      }}
    >
      {children(
        up => setFocusedForm(up || 150),
        down => setFocusedForm(down || 0),
      )}
    </Animated.View>
  )
}

export default FormContainer
