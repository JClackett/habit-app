import React, { memo, useRef, useState } from "react"
import { TouchableWithoutFeedback, Keyboard } from "react-native"
import FormContainer from "./FormContainer"
import TextInput from "../../components/TextInput"
import Button from "../../components/Button"
import Errors from "../../components/Errors"

function LoginForm(props) {
  const secondInput = useRef()
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
      {() => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            <TextInput
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              error={emailMissing}
              autoCorrect={false}
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
              returnKeyType="done"
              autoCorrect={false}
              setRef={secondInput}
              onChangeText={setPassword}
              value={password}
              onSubmitEditing={handleSubmit}
            />
            <Button text="login" variant="primary" onPress={handleSubmit} />
            {errors && <Errors errors={errors} />}
          </>
        </TouchableWithoutFeedback>
      )}
    </FormContainer>
  )
}

export default memo(LoginForm)
