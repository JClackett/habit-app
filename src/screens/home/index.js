import React, { memo, useState } from "react"
import styled from "styled-components/native"

import BottomBar from "./../../components/BottomBar"
import CreateHabitModal from "../../components/CreateHabitModal"
import SettingsModal from "../../components/SettingsModal"
import StatsModal from "../../components/StatsModal"

import Habits from "./Habits"

function HomeScreen() {
  const [habitModalOpen, setHabitModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)
  const [statsModalOpen, setStatsModalOpen] = useState(false)

  return (
    <StyledHomeWrapper>
      <Habits />
      <BottomBar
        openCreateHabitModal={() => setHabitModalOpen(true)}
        openSettingsModal={() => setSettingsModalOpen(true)}
        openStatsModal={() => setStatsModalOpen(true)}
      />
      <CreateHabitModal
        open={habitModalOpen}
        onCloseModal={() => setHabitModalOpen(false)}
      />
      <SettingsModal
        open={settingsModalOpen}
        onCloseModal={() => setSettingsModalOpen(false)}
      />
      <StatsModal
        open={statsModalOpen}
        onCloseModal={() => setStatsModalOpen(false)}
      />
    </StyledHomeWrapper>
  )
}

const StyledHomeWrapper = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.colorBackground};
`

export default memo(HomeScreen)
