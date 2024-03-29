import { useNavigate } from "react-router-dom"

import Button from "@/components/Atom/Button"
import InputForm from "@/components/Organism/InputForm"
import Input from "@/components/Molecule/Input"

import supabase from "@/config/supabase"
import useInput from "@/hooks/useInput"
import { SIGN_UP_MESSAGE, ERROR_COMMON_MESSAGE } from "@/constants/constants"
import { isEmail, isLongerThanSix, isSamePassword } from "@/util/validator"

const SignUp = () => {
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
  } = useInput(isLongerThanSix)

  const isSamePasswordValidator = (value: string) => isSamePassword(passwordValue, value)

  const {
    value: passwordConfirmValue,
    isValid: passwordConfirmValid,
    isError: passwordConfirmError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput(isSamePasswordValidator)

  let formValid = false

  if (emailValid && passwordValid && passwordConfirmValid) {
    formValid = true
  }

  async function onClickSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: emailValue,
        password: passwordValue,
      })
      const { user, session } = data
      if (user && session) {
        alert(SIGN_UP_MESSAGE.success)
        return navigate('/admin', { replace: true })
      }
      if (error?.name === 'AuthApiError' && error?.message === 'User already registered') {
        alert(SIGN_UP_MESSAGE.alreadyExist)
        return
      }
    } catch (error) {
      alert(ERROR_COMMON_MESSAGE)
      console.error('Error signing up: ', error)
    }
  }

  return (
      <InputForm title="회원가입" onSubmit={onClickSignUp}>
        <Input
          type="email"
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
        <Input
          type="password"
          id="passwordConfirm"
          placeholder="비밀번호 확인"
          label="비밀번호 확인"
          value={passwordConfirmValue}
          isError={passwordConfirmError}
          onChange={passwordConfirmChangeHandler}
          onBlur={passwordConfirmBlurHandler}
          disabled={passwordValue === ''}
        />
        <Button text="회원가입" size="large" disabled={!formValid} />
      </InputForm>
  )
}

export default SignUp