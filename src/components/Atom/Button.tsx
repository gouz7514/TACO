import styled, { css } from 'styled-components'

import { ButtonProps } from '../../types/types'

const ButtonStyle = styled.button<Partial<ButtonProps>>`
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }

  ${({ size }) => css`
    ${size === 'medium' && css`
      min-width: 120px;
      padding: 12px 16px;
    `}

    ${size === 'small' && css`
      width: auto;
      padding: 6px 8px;
    `}
  `}

  ${({ color }) => css`
    ${color === 'primary' && css`
      background-color: var(--button-primary);
    `}

    ${color === 'danger' && css`
      background-color: var(--button-danger);
      color: white;
    `}
  `}
`

const Button = ({ text, size = 'large', color = 'primary' }: ButtonProps) => {
  return (
    <ButtonStyle size={size} color={color}>
      {text}
    </ButtonStyle>
  )
}

export default Button