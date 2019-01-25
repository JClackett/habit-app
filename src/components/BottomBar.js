import React, { memo } from "react"
import { TouchableOpacity } from "react-native"
import { Ionicons, AntDesign } from "@expo/vector-icons"
import styled from "styled-components/native"

function BottomBar({
  openCreateHabitModal,
  openSettingsModal,
  // openStatsModal,
}) {
  return (
    <StyledBottomBar>
      <TouchableOpacity onPress={openCreateHabitModal} activeOpactiy={0.7}>
        <StyledIcon>
          <Ionicons name="ios-add" size={50} color="#dedede" />
        </StyledIcon>
      </TouchableOpacity>
      <TouchableOpacity onPress={openSettingsModal} activeOpactiy={0.7}>
        <StyledIcon>
          <AntDesign name="setting" size={30} color="#dedede" />
        </StyledIcon>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={openStatsModal} activeOpactiy={0.7}>
        <StyledIcon>
          <Ionicons name="ios-stats" size={30} color="#dedede" />
        </StyledIcon>
      </TouchableOpacity> */}
    </StyledBottomBar>
  )
}

export default memo(BottomBar)

const StyledBottomBar = styled.View`
  align-items: center;
  flex-direction: row;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${p => p.theme.paddingLarge};
`

const StyledIcon = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
`
