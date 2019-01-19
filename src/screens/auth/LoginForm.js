import React, { memo, useState } from "react"

import FormContainer from "./FormContainer"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import Errors from "../../components/Errors"

function LoginForm(props) {
  const [email, setEmail] = useState()
  const [emailMissing, setEmailMissing] = useState(false)
  const [password, setPassword] = useState()
  const [passwordMissing, setPasswordMissing] = useState(false)
  const [errors, setErrors] = useState()

  const handleSubmit = () => {
    const data = { email, password }
    if (!email || !password) {
      if (!email) setEmailMissing(true)
      if (!password) setPasswordMissing(true)
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
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        error={emailMissing}
        autoCorrect={false}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        autoCapitalize="none"
        label="Password"
        error={passwordMissing}
        secureTextEntry={true}
        returnKeyType="done"
        autoCorrect={false}
        onChangeText={text => setPassword(text)}
        value={password}
        onSubmitEditing={handleSubmit}
      />
      <Button text="login" variant="primary" onPress={handleSubmit} />
      {errors && <Errors errors={errors} />}
    </FormContainer>
  )
}

export default memo(LoginForm)
