import React from "react"
import { Mutation } from "react-apollo"

import { ME, LOGIN, REGISTER } from "./queries"

function AuthUser({ children }) {
  const handleSubmit = (data, mutate) => {
    return mutate({
      variables: { data },
      update: async (cache, { data }) => {
        const me = data.login || data.register
        await cache.writeQuery({ query: ME, data: { me } })
      },
    })
  }

  return (
    <Mutation mutation={LOGIN}>
      {loginMutation => (
        <Mutation mutation={REGISTER}>
          {registerMutation =>
            children(
              data => handleSubmit(data, loginMutation),
              data => handleSubmit(data, registerMutation),
            )
          }
        </Mutation>
      )}
    </Mutation>
  )
}

export default AuthUser
