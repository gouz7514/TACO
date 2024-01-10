import styled from "styled-components"

type InputFormProps = {
  title: string
  className?: string
  onSubmit?: (e: any) => void
  children: React.ReactNode
}

const InputFormStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .input-form-title {
    font-size: 24px;
    font-weight: 600;
    margin: 12px 0 24px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #ccc;
    padding: 24px;
    border-radius: 8px;
  }
`

const InputForm = ({ title, className, onSubmit, children }: InputFormProps) => {
  return (
    <InputFormStyle>
      <div className="input-form-title">
        {title}
      </div>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </InputFormStyle>
  )
}

export default InputForm