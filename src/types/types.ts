type ButtonSize = 'small' | 'medium' | 'large'
type ButtonTheme = 'primary' | 'secondary' | 'danger' | 'default'

export interface ButtonProps {
  text: string;
  size?: ButtonSize;
  color?: ButtonTheme;
}

export interface LinkButtonProps extends ButtonProps {
  href: string;
}