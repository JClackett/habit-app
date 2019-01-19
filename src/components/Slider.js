import React from "react"
import { StyleSheet } from "react-native"

import RNSlider from "react-native-slider"

function Slider({ value, onChange }) {
  return (
    <RNSlider
      value={value}
      step={1}
      animateTransitions
      animationType="spring"
      minimumTrackTintColor="#fff"
      maximumTrackTintColor="#fff"
      thumbTouchSize={{ width: 48, height: 48 }}
      trackStyle={{ height: 5 }}
      minimumValue={80}
      maximumValue={360}
      onValueChange={onChange}
      thumbStyle={styles.thumb}
      style={{ width: "100%" }}
    />
  )
}

const styles = StyleSheet.create({
  preview: {
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    shadowColor: "black",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
})

export default Slider
