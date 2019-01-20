import React, { memo, useRef, useState } from "react"

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
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()

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
      {(up, down) => (
        <>
          <TextInput
            label="Email"
            error={emailMissing}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            autoCorrect={false}
            onFocus={() => up(30)}
            blurOnSubmit={false}
            onSubmitEditing={() => secondInput.current.focus()}
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
            onFocus={() => up(50)}
            onSubmitEditing={() => thirdInput.current.focus()}
            setRef={secondInput}
            onChangeText={setPassword}
            value={password}
          />
          <TextInput
            label="First name"
            error={firstNameMissing}
            returnKeyType="next"
            onFocus={() => up(90)}
            onSubmitEditing={() => fourthInput.current.focus()}
            setRef={thirdInput}
            onChangeText={setFirstName}
            value={firstName}
          />
          <TextInput
            label="Last name"
            error={lastNameMissing}
            returnKeyType="done"
            onChangeText={setLastName}
            onFocus={() => up(110)}
            setRef={fourthInput}
            onBlur={down}
            onSubmitEditing={handleSubmit}
            value={lastName}
          />
          <Button text="sign up" onPress={handleSubmit} variant="primary" />
          {errors && <Errors errors={errors} />}
        </>
      )}
    </FormContainer>
  )
}

export default memo(RegisterForm)
