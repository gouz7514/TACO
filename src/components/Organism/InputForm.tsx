import styled from "styled-components"

type InputFormProps = {
  className?: string
  onSubmit?: (e: any) => void
  children: React.ReactNode
}

const InputFormStyle = styled.div`
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items: center;
  
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #ccc;
    padding: 24px;
    border-radius: 8px;
  }
`

const InputForm = ({ className, onSubmit, children }: InputFormProps) => {
  return (
    <InputFormStyle>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </InputFormStyle>
  )
}

export default InputForm