import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import Application from "./app"
import { ThemeProvider } from "styled-components"
import lightTheme from "./app/theme"

const uri =
  process.env.NODE_ENV == "production"
    ? "https://nq-habit.herokuapp.com/graphql"
    : "http://localhost:5000/graphql"

const client = new ApolloClient({
  uri,
  credentials: "include",
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <Application />
      </ThemeProvider>
    </ApolloProvider>
  )
}
