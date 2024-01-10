import styled from 'styled-components'

const EmptyStyle = styled.div`
  background-color: var(--color-lightgray);
  border-radius: 12px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-text {
    text-align: center;

    .title {
      font-size: 24px;
      font-weight: 600;
    }

    .sub-title {
      font-size: 16px;
      font-weight: 400;
      margin-top: 12px;
    }
  }
`

interface EmptyProps {
  title: string
  subTitle?: string
}

const Empty = ({ title, subTitle = '' }: EmptyProps) => {
  return (
    <EmptyStyle className='container'>
      <div className='empty-text'>
        <div className="title">
          {title}
        </div>
        {
          subTitle &&
          <div className="sub-title">
            {subTitle}
          </div>
        }
      </div>
    </EmptyStyle>
  )
}

export default Empty