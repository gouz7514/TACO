import styled from 'styled-components'

const LandingStyle = styled.div`
  .landing-text {
    margin-top: 40px;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    word-break: keep-all;
    font-family: AppleSDGothic,-apple-system,BlinkMacSystemFont,sans-serif;
  }
`

const Landing = () => {
  return (
    <LandingStyle className='container'>
      <div className='landing-text'>
        TACO와 함께 당신의 TASK를 관리하세요!
      </div>
    </LandingStyle>
  )
}

export default Landing