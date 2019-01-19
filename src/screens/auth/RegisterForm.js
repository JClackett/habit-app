import React, { memo, useState } from "react"

import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import Errors from "../../components/Errors"
import FormContainer from "./FormContainer"

function RegisterForm(props) {
  const [email, setEmail] = useState()
  const [emailMissing, setEmailMissing] = useState(false)
  const [password, setPassword] = useState()
  const [passwordMissing, setPasswordMissing] = useState(false)
  const [firstName, setFirstName] = useState()
  const [firstNameMissing, setFirstNameMissing] = useState(false)
  const [lastName, setLastName] = useState()
  const [lastNameMissing, setLastNameMissing] = useState(false)

  const [errors, setErrors] = useState()

  const handleSubmit = () => {
    const data = { email, password, firstName, lastName }
    if (!email || !password) {
      if (!email) setEmailMissing(true)
      if (!password) setPasswordMissing(true)
      if (!firstName) setFirstNameMissing(true)
      if (!lastName) setLastNameMissing(true)
      return
    }

    props.onFormSubmit(data).catch(error => {
      if (error.graphQLErrors) {
        setErrors(error.graphQLErrors)
      }
    })
  }
  return (
    <FormContainer>
      <TextInput
        label="Email"
        error={emailMissing}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        autoCorrect={false}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        autoCapitalize="none"
        label="Password"
        error={passwordMissing}
        secureTextEntry={true}
        returnKeyType="next"
        autoCorrect={false}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        label="First name"
        error={firstNameMissing}
        returnKeyType="next"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        label="Last name"
        error={lastNameMissing}
        returnKeyType="done"
        onChangeText={setLastName}
        onSubmitEditing={handleSubmit}
        value={lastName}
      />
      <Button text="sign up" onPress={handleSubmit} variant="primary" />
      {errors && <Errors errors={errors} />}
    </FormContainer>
  )
}

export default memo(RegisterForm)
