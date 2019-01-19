import React from "react"
import { Mutation } from "react-apollo"
import { CREATE_HABIT, GET_HABITS } from "./queries"

function CreateHabit({ children }) {
  const handleCreateHabit = async (data, mutate) => {
    try {
      await mutate({
        variables: { data },
        update: (cache, { data: { createHabit } }) => {
          if (createHabit) {
            const data = cache.readQuery({
              query: GET_HABITS,
            })
            data.getHabits.push(createHabit)
            cache.writeQuery({
              query: GET_HABITS,
              data,
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
    <Mutation mutation={CREATE_HABIT}>
      {createHabitMutation =>
        children(data => handleCreateHabit(data, createHabitMutation))
      }
    </Mutation>
  )
}

export default CreateHabit
