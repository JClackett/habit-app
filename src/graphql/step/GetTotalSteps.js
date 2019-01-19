import React, { useEffect } from "react"
import { Query, withApollo } from "react-apollo"
import { GET_TOTAL_STEPS } from "./queries"

function GetTotalSteps({ habit, startDate, children, client }) {
  useEffect(
    () => {
      client.query({
        query: GET_TOTAL_STEPS,
        variables: { habitId: habit.id, startDate },
      })
    },
    [startDate],
  )
  return (
    <Query query={GET_TOTAL_STEPS} variables={{ habitId: habit.id, startDate }}>
      {({ data }) => {
        const totalSteps = data.getTotalSteps
        return children({ totalSteps })
      }}
    </Query>
  )
}

export default withApollo(GetTotalSteps)
