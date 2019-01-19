import { useRef, useEffect } from "react"
import { Animated } from "react-native"

const useAnimatedValue = initialValue => {
  const ref = useRef(new Animated.Value(initialValue))
  return ref.current
}

const getInitialValue = config => {
  if (typeof config.initialValue !== "undefined") return config.initialValue
  else {
    return config.toValue
  }
}

const useAnimation = config => {
  const animatedValue = useAnimatedValue(getInitialValue(config))
  const animate = () => {
    if (config.type === "timing") {
      Animated.timing(animatedValue, config).start()
    } else if (config.type === "spring") {
      Animated.spring(animatedValue, config).start()
    } else {
      throw new Error("unsupported animation type=" + config.type)
    }
  }
  useEffect(animate, [config.toValue])

  return animatedValue
}

export default useAnimation
