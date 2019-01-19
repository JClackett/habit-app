import { gql } from "apollo-boost"

export const StepInfo = gql`
  fragment StepInfo on Step {
    id
    day
  }
`
