import React from "react"
import Habit from "./Habit"
import GetTotalSteps from "../graphql/step/GetTotalSteps"
import CreateStep from "../graphql/step/CreateStep"

function HabitContainer({ habit, startDate }) {
  return (
    <GetTotalSteps habit={habit} startDate={startDate}>
      {({ totalSteps }) => (
        <CreateStep habit={habit} startDate={startDate}>
          {createStep => (
            <Habit
              habit={habit}
              totalSteps={totalSteps}
              createStep={createStep}
            />
          )}
        </CreateStep>
      )}
    </GetTotalSteps>
  )
}

export default HabitContainer
