import styled from 'styled-components'

import { TacoProps } from '@/types/types'

const CardStyle = styled.div`
  --icon-size: 28px;

  border-radius: 10px;
  background-color: var(--color-white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 12px;
  position: relative;
  cursor: pointer;

  .btn-delete {
    position: absolute;
    top: 8px;
    right: 8px;
    width: var(--icon-size);
    height: var(--icon-size);
    background-image: url('/icon/icon-delete.svg');
    background-size: var(--icon-size) var(--icon-size);
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
  }

  .title {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .description {
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`

interface CardProps extends TacoProps {
  onDelete: (id: number) => void
}

const Card = ({ id, title, description, onDelete }: CardProps) => {
  const onClickCard = () => {
    console.log('click : ', id)
  }

  const onClickDelete = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    onDelete(id)
  }

  return (
    <CardStyle onClick={onClickCard}>
      <div className="btn-delete" onClick={onClickDelete} />
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </CardStyle>
  )
}

export default Card