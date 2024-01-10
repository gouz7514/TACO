import { useNavigate } from "react-router-dom"

import Button from "@/components/Atom/Button"
import LinkButton from "@/components/Atom/LinkButton"
import InputForm from "@/components/Organism/InputForm"
import Input from "@/components/Molecule/Input"

import supabase from "@/config/supabase"
import useInput from "@/hooks/useInput"
import { SIGN_IN_MESSAGE, ERROR_COMMON_MESSAGE } from "@/constants/constants"
import { isEmail, isLongerThanSix } from "@/util/validator"

const SignIn = () => {
  const navigate = useNavigate()

  const {
    value: emailValue,
    isValid: emailValid,
    isError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
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

  async function onClickSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailValue,
        password: passwordValue,
      })
      const { user, session } = data
      if (user && session) {
        return navigate('/admin', { replace: true })
      }
      if (error?.name === 'AuthApiError') {
        alert(SIGN_IN_MESSAGE.fail)
        resetPassword()
      }
    } catch (error) {
      alert(ERROR_COMMON_MESSAGE)
      console.error('Error signing in: ', error)
    }
  }

  return (
    <InputForm title="로그인" onSubmit={onClickSignIn}>
      <Input
        type="text"
        id="email"
        placeholder="example@example.com"
        label="이메일"
        value={emailValue}
        isError={emailError}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      <Input
        type="password"
        id="password"
        placeholder="6자리 이상의 비밀번호를 입력해주세요."
        label="비밀번호"
        value={passwordValue}
        isError={passwordError}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      <Button text="로그인" type="submit" disabled={!formValid} />
      <LinkButton href="/signup" text="회원가입" color="secondary" />
    </InputForm>
  )
}

export default SignIn