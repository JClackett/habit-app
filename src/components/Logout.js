import React, { memo } from "react"
import Button from "./Button"
import LogoutUser from "../graphql/user/LogoutUser"

function Logout() {
  return (
    <LogoutUser>
      {logoutUser => <Button text="Logout" onPress={logoutUser} />}
    </LogoutUser>
  )
}

export default memo(Logout)
