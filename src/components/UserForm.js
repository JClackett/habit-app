import React, { useState, memo } from "react"

import styled from "styled-components/native"

import TextInput from "./TextInput"

function UserForm(props) {
  const [firstName, setFirstName] = useState(props.user.firstName)
  const [lastName, setLastName] = useState(props.user.lastName)
  const [email, setEmail] = useState(props.user.email)

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      email,
    }
    props.onFormSubmit(data)
  }

  return (
    <StyledForm>
      <TextInput
        label="First name"
        returnKeyType="done"
        onBlur={onSubmit}
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        label="Last name"
        returnKeyType="done"
        onBlur={onSubmit}
        onChangeText={setLastName}
        value={lastName}
      />

      <TextInput
        label="Email"
        returnKeyType="done"
        onBlur={onSubmit}
        onChangeText={setEmail}
        value={email}
      />
    </StyledForm>
  )
}

const StyledForm = styled.View`
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-around;
`

export default memo(UserForm)
