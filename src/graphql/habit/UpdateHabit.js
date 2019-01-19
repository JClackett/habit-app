import React from "react"
import { Mutation } from "react-apollo"
import { UPDATE_HABIT } from "./queries"

function UpdateHabit({ habit, children }) {
  const handleUpdateHabit = async (data, mutate) => {
    try {
      await mutate({
        variables: { data: { ...data, id: habit.id } },
        optimisticResponse: {
          __typename: "Mutation",
          updateHabit: {
            __typename: "Habit",
            id: habit.id,
            ...data,
          },
        },
      })
    } catch (error) {
      if (error.graphQLErrors) {
        // setErrors(error.graphQLErrors)
      }
    }
  }

  return (
    <Mutation mutation={UPDATE_HABIT} key={habit.id}>
      {updateHabitMutation =>
        children(data => handleUpdateHabit(data, updateHabitMutation))
      }
    </Mutation>
  )
}

export default UpdateHabit
