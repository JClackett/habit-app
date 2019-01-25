import React from "react"
import { Mutation } from "react-apollo"
import { GET_TOTAL_STEPS, DESTROY_STEP } from "./queries"

function DestroyStep({ habit, startDate, children }) {
  const handleDestroyStep = async mutate => {
    try {
      await mutate({
        variables: { startDate, habitId: habit.id },
        optimisticResponse: {
          __typename: "Mutation",
          destroyStep: {
            __typename: "Step",
            id: Math.round(new Date().getTime() / 1000),
            day: startDate,
          },
        },
        update: (cache, { data: { destroyStep } }) => {
          const data = cache.readQuery({
            query: GET_TOTAL_STEPS,
            variables: { habitId: habit.id, startDate },
          })
          if (destroyStep) {
            cache.writeQuery({
              query: GET_TOTAL_STEPS,
              variables: { habitId: habit.id, startDate },
              data: { getTotalSteps: data.getTotalSteps - 1 },
            })
          }
        },
      })
    } catch (error) {
      if (error.graphQLErrors) {
        // setErrors(error.graphQLErrors)
      }
    }
  }

  return (
    <Mutation mutation={DESTROY_STEP}>
      {destroyStepMutation =>
        children(() => handleDestroyStep(destroyStepMutation))
      }
    </Mutation>
  )
}

export default DestroyStep
