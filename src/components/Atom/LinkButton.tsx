import { Link } from 'react-router-dom'

import Button from './Button'
import { LinkButtonProps } from '@/types/types'

const LinkButton = ({ href, text, size = 'large', color = 'primary' }: LinkButtonProps) => {
  return (
    <Link to={href} style={{
      width: '100%',
    }}>
      <Button text={text} size={size} color={color} />
    </Link>
  )
}

export default LinkButton