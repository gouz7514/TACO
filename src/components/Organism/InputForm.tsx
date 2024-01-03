import styled from "styled-components"

type InputFormProps = {
  className?: string
  onSubmit?: (e: any) => void
  children: React.ReactNode
}

const InputFormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ccc;
  padding: 24px;
  border-radius: 8px;
`

const InputForm = ({ className, onSubmit, children }: InputFormProps) => {
  return (
    <InputFormStyle className={className} onSubmit={onSubmit}>
      {children}
    </InputFormStyle>
  )
}

export default InputForm