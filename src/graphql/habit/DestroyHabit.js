import React from "react"
import { Mutation } from "react-apollo"
import { DESTROY_HABIT, GET_HABITS } from "./queries"

function DestroyHabit({ habit, children }) {
  const destroyHabit = async mutate => {
    await mutate({
      variables: { habitId: habit.id },
      update: cache => {
        const data = cache.readQuery({ query: GET_HABITS })
        const habits = data.getHabits.filter(h => h.id !== habit.id)
        cache.writeQuery({
          query: GET_HABITS,
          data: { getHabits: habits },
        })
      },
    })
  }

  return (
    <Mutation mutation={DESTROY_HABIT}>
      {destroyHabitMutation =>
        children(() => destroyHabit(destroyHabitMutation))
      }
    </Mutation>
  )
}

export default DestroyHabit
