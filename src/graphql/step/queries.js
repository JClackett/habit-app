import { gql } from "apollo-boost"
import { StepInfo } from "./fragments"

export const CREATE_STEP = gql`
  mutation CreateStep($data: CreateStepData!) {
    createStep(data: $data) {
      ...StepInfo
    }
  }
  ${StepInfo}
`

export const GET_TOTAL_STEPS = gql`
  query GetTotalSteps($habitId: String!, $startDate: String!) {
    getTotalSteps(habitId: $habitId, startDate: $startDate)
  }
`
