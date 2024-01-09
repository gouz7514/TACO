import styled from 'styled-components'

const EmptyStyle = styled.div`
  background-color: #ddd;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-text {
    font-size: 24px;
    font-weight: 600;
  }
`

interface EmptyProps {
  title: string
}

const Empty = ({ title }: EmptyProps) => {
  return (
    <EmptyStyle className='container'>
      <div className='empty-text'>
        {title}
      </div>
    </EmptyStyle>
  )
}

export default Empty