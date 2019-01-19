import React from "react"
import { Mutation } from "react-apollo"
import { LOGOUT, ME } from "./queries"

function LogoutUser({ children }) {
  const handleLogout = async mutate => {
    try {
      return await mutate({
        update: cache => {
          cache.writeQuery({
            query: ME,
            data: { me: null },
          })
        },
      })
    } catch (error) {
      if (error.graphQLErrors) {
        // setErrors(error.graphQLErrors)
      }
    }
  }

  return (
    <Mutation mutation={LOGOUT}>
      {logoutUserMutation => children(() => handleLogout(logoutUserMutation))}
    </Mutation>
  )
}

export default LogoutUser
