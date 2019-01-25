import React, { useState } from "react"
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
} from "react-native"
import styled from "styled-components/native"
import useAnimation from "../hooks/useAnimation"
import { round } from "../lib/helpers"

import UpdateHabitModal from "./UpdateHabitModal"

function calculatePercentage(count, total) {
  if (!count || count == 0) return 0
  const float = count / total
  const progress = round(float, 2)
  return progress
}

function Habit({ habit, totalSteps, createStep, destroyStep }) {
  const [modalOpen, setModalOpen] = useState(false)

  const progressValue = useAnimation({
    type: "timing",
    initialValue: 0,
    toValue: calculatePercentage(totalSteps, habit.amount),
    duration: 300,
  })

  const onCreateStep = () => {
    if (totalSteps === habit.amount) return
    createStep()
  }

  return (
    <TouchableWithoutFeedback onLongPress={destroyStep}>
      <StyledHabit>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor: habit.color,
            width: progressValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
              extrapoltate: "clamp",
            }),
          }}
        />
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <StyledName>{habit.name}</StyledName>
          <StyledInterval>{habit.amount} per week</StyledInterval>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={onCreateStep}>
          <StyledCount>{totalSteps}</StyledCount>
        </TouchableOpacity>
        <UpdateHabitModal
          open={modalOpen}
          habit={habit}
          onCloseModal={() => setModalOpen(false)}
        />
      </StyledHabit>
    </TouchableWithoutFeedback>
  )
}

const StyledHabit = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  height: 70px;
  width: 100%;
  background-color: rgba(230, 230, 255, 0.7);
  border-radius: ${p => p.theme.borderRadius};
  margin-bottom: ${p => p.theme.paddingMedium};
`

const StyledName = styled.Text`
  text-transform: uppercase;
  color: black;
  letter-spacing: ${p => p.theme.letterSpacing};
  font-size: ${p => p.theme.fontMedium};
  padding: 2px ${p => p.theme.paddingMedium};
`
const StyledInterval = styled.Text`
  color: white;
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacing};
  font-size: ${p => p.theme.fontSmall};
  padding: 0px ${p => p.theme.paddingMedium};
`

const StyledCount = styled.Text`
  color: black;
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacing};
  font-size: ${p => p.theme.fontMedium};
  padding: ${p => p.theme.paddingMedium};
`
export default Habit
