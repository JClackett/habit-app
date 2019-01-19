import React, { useState, memo } from "react"
import { TouchableOpacity, Text, Animated, PanResponder } from "react-native"
import styled from "styled-components/native"
import { AntDesign } from "@expo/vector-icons"

import DestroyHabit from "../graphql/habit/DestroyHabit"

import TextInput from "./TextInput"
import Button from "./Button"

const HABIT_COLORS = {
  mind: "#f12e4e",
  body: "#485bc5",
  soul: "#0fbb93",
}

function HabitForm(props) {
  const habit = { ...props.habit }
  const [name, setName] = useState(habit.name)
  const [amount, setAmount] = useState(habit.amount || 1)
  const [type, setType] = useState(habit.type || "body")
  const color = HABIT_COLORS[type]
  const pan = new Animated.Value(0)

  const onSubmit = () => {
    const data = {
      name,
      amount,
      type,
      color,
    }
    props.onFormSubmit(data)
  }

  const decrementAmount = () => {
    if (amount === 1) return
    setAmount(amount - 1)
  }

  const incrementAmount = () => {
    setAmount(amount + 1)
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, g) => {
      Animated.spring(pan, {
        toValue: g.dx,
        stiffness: 20,
        damping: 100,
      }).start()
    },
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: 0, duration: 50 }).start()
    },
  })

  return (
    <StyledForm>
      <TextInput
        label="Name"
        returnKeyType="done"
        onChangeText={setName}
        value={name}
      />

      {/* AMOUNT */}
      <StyledField>
        <StyledLabel>Amount per week</StyledLabel>
        <StyledCounter>
          <TouchableOpacity onPress={decrementAmount}>
            <AntDesign
              name="caretdown"
              color="rgba(255,255,255,0.6)"
              size={20}
            />
          </TouchableOpacity>
          <Animated.View {...panResponder.panHandlers} style={{ left: pan }}>
            <StyledCounterValue>
              <Text style={{ fontSize: 20 }}>{amount}</Text>
            </StyledCounterValue>
          </Animated.View>
          <TouchableOpacity onPress={incrementAmount}>
            <AntDesign name="caretup" color="rgba(255,255,255,0.6)" size={20} />
          </TouchableOpacity>
        </StyledCounter>
      </StyledField>

      {/* TYPE */}
      <StyledField>
        <StyledLabel>Type</StyledLabel>
        <StyledOptions>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setType("mind")}>
            <StyledOptionWrap selected={type === "mind"}>
              <StyledOption selected={type === "mind"}>mind</StyledOption>
            </StyledOptionWrap>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setType("body")}>
            <StyledOptionWrap selected={type === "body"}>
              <StyledOption selected={type === "body"}>body</StyledOption>
            </StyledOptionWrap>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setType("soul")}>
            <StyledOptionWrap selected={type === "soul"}>
              <StyledOption selected={type === "soul"}>soul</StyledOption>
            </StyledOptionWrap>
          </TouchableOpacity>
        </StyledOptions>
      </StyledField>

      <Button text="submit" variant="primary" onPress={onSubmit} />

      {props.habit && (
        <StyledDelete>
          <DestroyHabit habit={props.habit} onCloseModal={props.onCloseModal}>
            {destroyHabit => (
              <TouchableOpacity
                onPress={async () => {
                  props.onHabbitDestroy()
                  await destroyHabit()
                }}
              >
                <StyledDeleteText>delete</StyledDeleteText>
              </TouchableOpacity>
            )}
          </DestroyHabit>
        </StyledDelete>
      )}
    </StyledForm>
  )
}
export default memo(HabitForm)

const StyledForm = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.paddingMedium} 0;
`

const StyledField = styled.View`
  width: 100%;
`
const StyledLabel = styled.Text`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: ${p => p.theme.letterSpacingSmall};
  font-size: ${p => p.theme.fontSmall};
`
const StyledCounter = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 ${p => p.theme.paddingLarge};
`

const StyledCounterValue = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${p => p.theme.colorTransparent};
  border-radius: ${p => p.theme.borderRadius};
`

const StyledOptions = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
`

const StyledOptionWrap = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.paddingSmall};
  margin: ${p => p.theme.paddingExtraSmall} ${p => p.theme.paddingSmall};
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p =>
    p.selected ? p.theme.colorTransparent : "transparent"};
`

const StyledOption = styled.Text`
  text-transform: uppercase;
  width: 60px;
  text-align: center;
  color: ${p => (p.selected ? "black" : "white")};
  letter-spacing: ${p => p.theme.letterSpacingSmall};
`

const StyledDelete = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: ${p => p.theme.paddingMedium};
  padding-top: 0;
`

const StyledDeleteText = styled.Text`
  text-transform: uppercase;
  color: white;
  letter-spacing: ${p => p.theme.letterSpacing};
  font-size: ${p => p.theme.fontSmall};
`