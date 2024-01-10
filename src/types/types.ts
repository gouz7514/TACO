type ButtonSize = 'small' | 'medium' | 'large'
type ButtonTheme = 'primary' | 'secondary' | 'danger' | 'default'

export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  size?: ButtonSize;
  color?: ButtonTheme;
  onClick?: ((e: any) => void) | ((e: any) => Promise<void>),
  disabled?: boolean;
}

export interface LinkButtonProps extends ButtonProps {
  href: string;
}

export interface TacoProps {
  id: number;
  title: string;
  description: string;
}