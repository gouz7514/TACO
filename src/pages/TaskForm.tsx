import { useNavigate } from "react-router-dom"

import InputForm from "@/components/Organism/InputForm"
import Input from "@/components/Molecule/Input"
import Button from "@/components/Atom/Button"

import supabase from "@/config/supabase"
import useInput from "@/hooks/useInput"
import { isNotEmpty } from "@/util/validator"

import { ERROR_MESSAGE } from "@/constants/constants"

const TaskForm = () => {
  const navigate = useNavigate()

  const {
    value: TitleValue,
    isValid: TitleValid,
    isError: TitleError,
    valueChangeHandler: TitleChangeHandler,
    inputBlurHandler: TitleBlurHandler,
  } = useInput(isNotEmpty)

  const {
    value: descriptionValue,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
  } = useInput(isNotEmpty)

  let formValid = false

  if (TitleValid) {
    formValid = true
  }

  const onSubmitTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { error } = await supabase
        .from('tacos')
        .insert({
          title: TitleValue,
          description: descriptionValue,
        })

      if (error) throw error
      alert('Task가 추가되었습니다.')
      return navigate('/admin')
    } catch (error) {
      alert(ERROR_MESSAGE.TASK.insert)
      console.error('Error inserting task: ', error)
    }
  }

  return (
    <InputForm onSubmit={onSubmitTask}>
      <Input
        type="text"
        id="Title"
        placeholder="Task의 제목을 입력해주세요."
        label="제목"
        value={TitleValue}
        isError={TitleError}
        onChange={TitleChangeHandler}
        onBlur={TitleBlurHandler}
      />
      <Input
        type="text"
        id="description"
        placeholder="Task의 설명을 입력해주세요."
        label="설명"
        value={descriptionValue}
        onChange={descriptionChangeHandler}
        onBlur={descriptionBlurHandler}
      />
      <Button text="제출" size="large" disabled={!formValid} />
    </InputForm>
  )
}

export default TaskForm