import React from "react"
import { Mutation } from "react-apollo"
import { UPDATE_USER } from "./queries"

function UpdateUser({ user, children }) {
  const handleUpdateUser = async (data, mutate) => {
    try {
      return await mutate({ variables: { data } })
    } catch (error) {
      if (error.graphQLErrors) {
        // setErrors(error.graphQLErrors)
      }
    }
  }

  return (
    <Mutation mutation={UPDATE_USER} key={user.id}>
      {updateUserMutation =>
        children(data => handleUpdateUser(data, updateUserMutation))
      }
    </Mutation>
  )
}

export default UpdateUser
