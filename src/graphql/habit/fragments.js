import { gql } from "apollo-boost"

export const HabitInfo = gql`
  fragment HabitInfo on Habit {
    id
    name
    amount
    type
    color
  }
`
