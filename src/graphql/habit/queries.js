import { gql } from "apollo-boost"
import { HabitInfo } from "./fragments"

export const GET_HABITS = gql`
  query GetHabits {
    getHabits {
      ...HabitInfo
    }
  }
  ${HabitInfo}
`

export const CREATE_HABIT = gql`
  mutation CreateHabit($data: HabitData!) {
    createHabit(data: $data) {
      ...HabitInfo
    }
  }
  ${HabitInfo}
`

export const UPDATE_HABIT = gql`
  mutation UpdateHabit($data: UpdateHabit!) {
    updateHabit(data: $data) {
      ...HabitInfo
    }
  }
  ${HabitInfo}
`

export const DESTROY_HABIT = gql`
  mutation DestroyHabit($habitId: String!) {
    destroyHabit(habitId: $habitId)
  }
`
