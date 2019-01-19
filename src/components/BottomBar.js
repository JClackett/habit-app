import React, { memo } from "react"
import { TouchableOpacity } from "react-native"
import { Ionicons, AntDesign } from "@expo/vector-icons"
import styled from "styled-components/native"

function BottomBar({ openCreateHabitModal, openSettingsModal }) {
  return (
    <StyledBottomBar>
      <TouchableOpacity onPress={openSettingsModal} activeOpactiy={0.7}>
        <AntDesign name="setting" size={30} color="#dedede" />
      </TouchableOpacity>
      <TouchableOpacity onPress={openCreateHabitModal} activeOpactiy={0.7}>
        <Ionicons name="ios-add" size={50} color="#dedede" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} activeOpactiy={0.7}>
        <Ionicons name="ios-stats" size={30} color="#dedede" />
      </TouchableOpacity>
    </StyledBottomBar>
  )
}

export default memo(BottomBar)

const StyledBottomBar = styled.View`
  align-items: center;
  flex-direction: row;
  height: 50px;
  width: 100%;
  justify-content: space-around;
`
