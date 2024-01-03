import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Button from "@/components/Atom/Button"
import LinkButton from "@/components/Atom/LinkButton"
import InputForm from "@/components/Organism/InputForm"
import Input from "@/components/Molecule/Input"

import supabase from "@/supabase/config"

import useInput from "@/hooks/useInput"

import { LOGIN_MESSAGE } from "@/constants/constants"

const LoginStyle = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const isEmail = (value: string) => value.includes('@')
const isLongerThanSix = (value: string) => value.length >= 6

const Login = () => {
  const navigate = useNavigate()

  const {
    value: emailValue,
    isValid: emailValid,
    isError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail)

  const {
    value: passwordValue,
    isValid: passwordValid,
    isError: passwordError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isLongerThanSix)

  let formValid = false

  if (emailValid && passwordValid) {
    formValid = true
  }

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          return navigate('/', { replace: true })
        }
      } catch (error) {
        console.error(error)
      }
    }

    getSession()
      .catch(err => console.error(err))
  }, [navigate])

  async function onClickSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailValue,
        password: passwordValue,
      })
      const { user, session } = data
      if (user && session) {
        alert(LOGIN_MESSAGE.success)
        return navigate('/', { replace: true })
      } else {
        alert(LOGIN_MESSAGE.fail)
        resetEmail()
        resetPassword()
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginStyle className="container">
      <InputForm onSubmit={onClickSignIn}>
        <Input
          type="text"
          id="email"
          placeholder="이메일"
          value={emailValue}
          isError={emailError}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <Input
          type="password"
          id="password"
          placeholder="비밀번호"
          value={passwordValue}
          isError={passwordError}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <Button text="로그인" type="submit" color="primary" disabled={!formValid} />
        <LinkButton href="/signup" text="회원가입" color="secondary" />
      </InputForm>
    </LoginStyle>
  )
}

export default Login