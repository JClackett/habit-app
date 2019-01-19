import React from "react"
import { Query } from "react-apollo"
import { GET_HABITS } from "./queries"

function GetHabits({ children }) {
  return (
    <Query query={GET_HABITS}>
      {({ data, loading }) => {
        const habits = data.getHabits
        if (loading) return null
        return children({ habits })
      }}
    </Query>
  )
}

export default GetHabits
