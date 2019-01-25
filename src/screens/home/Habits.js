import React, { useState } from "react"
import { FlatList } from "react-native"
import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
dayjs.extend(weekOfYear)
import styled from "styled-components/native"

import GetHabits from "../../graphql/habit/GetHabits"
import HabitContainer from "../../components/HabitContainer"
import TopBar from "../../components/TopBar"

function Habits() {
  const [startDate, setStartDate] = useState(dayjs())

  const prevWeek = () => {
    setStartDate(startDate.subtract(1, "week"))
  }

  const nextWeek = () => {
    if (startDate.isSame(dayjs(), "week")) return
    setStartDate(startDate.add(1, "week"))
  }

  return (
    <StyledHabitWrapper>
      <GetHabits>
        {({ habits }) => {
          if (habits.length === 0)
            return (
              <>
                <TopBar startDate={startDate} />
                <StyledNoHabitTitle>no habits added yet</StyledNoHabitTitle>
              </>
            )
          return (
            <FlatList
              data={habits}
              extraData={[startDate, habits]}
              keyExtractor={item => item.id}
              stickyHeaderIndices={[0]}
              ListHeaderComponent={
                <TopBar
                  startDate={startDate}
                  prevWeek={prevWeek}
                  nextWeek={nextWeek}
                />
              }
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <HabitContainer habit={item} startDate={startDate} />
              )}
            />
          )
        }}
      </GetHabits>
    </StyledHabitWrapper>
  )
}

export default Habits

const StyledHabitWrapper = styled.View`
  flex: 1;
  padding: 0 ${p => p.theme.paddingMedium};
`

const StyledNoHabitTitle = styled.Text`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colorTransparent};
  letter-spacing: ${p => p.theme.letterSpacingSmall};
`
