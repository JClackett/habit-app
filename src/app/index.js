import React from "react"
import { StatusBar } from "react-native"

import { Query } from "react-apollo"

import { AppContext } from "./context"
import { ME } from "../graphql/user/queries"

import AuthScreen from "../screens/auth"
import HomeScreen from "../screens/home"
import Loading from "../components/Loading"

function Application() {
  return (
    <Query query={ME}>
      {({ loading, data }) => {
        if (loading) return <Loading />
        if (!data || !data.me) return <AuthScreen />
        return (
          <AppContext.Provider value={{ user: data.me }}>
            <StatusBar barStyle="light-content" />
            <HomeScreen />
          </AppContext.Provider>
        )
      }}
    </Query>
  )
}
export default Application
