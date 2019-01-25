import React from "react"
import Habit from "./Habit"
import GetTotalSteps from "../graphql/step/GetTotalSteps"
import CreateStep from "../graphql/step/CreateStep"
import DestroyStep from "../graphql/step/DestroyStep"

function HabitContainer({ habit, startDate }) {
  return (
    <GetTotalSteps habit={habit} startDate={startDate}>
      {({ totalSteps }) => (
        <CreateStep habit={habit} startDate={startDate}>
          {createStep => (
            <DestroyStep habit={habit} startDate={startDate}>
              {destroyStep => (
                <Habit
                  habit={habit}
                  totalSteps={totalSteps}
                  createStep={createStep}
                  destroyStep={destroyStep}
                />
              )}
            </DestroyStep>
          )}
        </CreateStep>
      )}
    </GetTotalSteps>
  )
}

export default HabitContainer
