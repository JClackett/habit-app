import React from "react"
import { Mutation } from "react-apollo"
import { CREATE_STEP, GET_TOTAL_STEPS } from "./queries"

function CreateStep({ habit, startDate, children }) {
  const handleCreateStep = async mutate => {
    try {
      const data = { day: startDate, habitId: habit.id }
      await mutate({
        variables: { data },
        optimisticResponse: {
          __typename: "Mutation",
          createStep: {
            __typename: "Step",
            id: Math.round(new Date().getTime() / 1000),
            day: startDate,
          },
        },
        update: (cache, { data: { createStep } }) => {
          const data = cache.readQuery({
            query: GET_TOTAL_STEPS,
            variables: { habitId: habit.id, startDate },
          })
          if (createStep) {
            cache.writeQuery({
              query: GET_TOTAL_STEPS,
              variables: { habitId: habit.id, startDate },
              data: { getTotalSteps: data.getTotalSteps + 1 },
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
    <Mutation mutation={CREATE_STEP}>
      {createStepMutation =>
        children(() => handleCreateStep(createStepMutation))
      }
    </Mutation>
  )
}

export default CreateStep
