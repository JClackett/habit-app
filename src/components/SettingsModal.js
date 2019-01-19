import React, { useContext, memo } from "react"
import styled from "styled-components/native"

import Modal from "./Modal"
import Logout from "./Logout"
import UpdateUser from "../graphql/user/UpdateUser"
import { AppContext } from "../app/context"
import UserForm from "./UserForm"

function SettingsModal(props) {
  const { user } = useContext(AppContext)

  return (
    <Modal
      title="Settings"
      closeText="done"
      onCloseModal={props.onCloseModal}
      open={props.open}
    >
      <StyledWrapper>
        <UpdateUser user={user}>
          {updateUser => (
            <UserForm
              user={user}
              onFormSubmit={async data => await updateUser(data)}
            />
          )}
        </UpdateUser>
        <Logout />
      </StyledWrapper>
    </Modal>
  )
}

const StyledWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export default memo(SettingsModal)
