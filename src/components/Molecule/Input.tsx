import styled, { css } from 'styled-components'
import { forwardRef } from 'react'

import { ERROR_GUIDE } from '@/constants/constants'

type InputProps = {
  type: string
  id: string
  ref?: any
  name?: string
  placeholder?: string
  value: string
  isError?: boolean
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  disabled?: boolean
}

const InputStyle = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    padding: 0 8px;
    margin-bottom: 8px;
    background-color: #fff;
    z-index: 100;
  
    &:focus {
      border: 1px solid var(--color-blue);
    }
  
    &:disabled {
      background-color: #dddddd;
      cursor: not-allowed;
      opacity: 0.6;
    }

    ${({ type }) => css`
      ${type === 'date' && css`
        position: relative;
  
        &::-webkit-calendar-picker-indicator {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          color: transparent;
          cursor: pointer;
        }
      `}    
    `}
    )}

    .error {
      border: 1px solid var(--color-red);
      background-color: #fddddd;
  
      &:focus {
        border: 1px solid var(--color-red);
      }
    }
  }

  .error-guide {
    color: var(--color-red);
    font-size: 12px;
    height: 12px;
  }
`

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { isError, ...restProps } = props

  return (
    <InputStyle {...restProps}>
      <label htmlFor={props.id}>{props.placeholder}</label>
      <input
        className={isError ? 'error' : ''}
        type={props.type}
        ref={ref}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        disabled={props.disabled}
      />
      <span className="error-guide">
        {isError ? `${ERROR_GUIDE(props.id)}` : ''}
      </span>
    </InputStyle>
  )
})

Input.displayName = 'TACOInput'

export default Input