import { gql } from "apollo-boost"
import { StepInfo } from "./fragments"

export const CREATE_STEP = gql`
  mutation CreateStep($data: StepData!) {
    createStep(data: $data) {
      ...StepInfo
    }
  }
  ${StepInfo}
`

export const DESTROY_STEP = gql`
  mutation CreateStep($habitId: String!, $startDate: String!) {
    destroyStep(habitId: $habitId, startDate: $startDate)
  }
`

export const GET_TOTAL_STEPS = gql`
  query GetTotalSteps($habitId: String!, $startDate: String!) {
    getTotalSteps(habitId: $habitId, startDate: $startDate)
  }
`
