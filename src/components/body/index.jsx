import styled from 'styled-components'
import MyForm from './Form'

const StyleSubTitle = styled.h2`
    @media (max-width:768px){
        font:normal normal 800 2.3rem/normal 'Poppins', sans-serif;
        text-align: center;
        margin: 60px 0;
    }
    @media(min-width:375px){
        padding: 0 40px;
    }
`

const StyleSubTitle2 = styled(StyleSubTitle)`
    @media (max-width:768px){
        font:normal normal 800 2.3rem/normal 'Poppins', sans-serif;
        margin: 46px 0px 0px 0px;
    }
`

const StyleSpan = styled.span`
    color: #6C63FF;
`
const Banner = styled.div`
    width: 100%;
    display: flex;
    @media(max-width:768px){
        flex-direction: column;
        align-items: center;
        justify-content: 
    }
`

const Img = styled.img`
    width: 80%;
`

export default function Body() {
  return (
    <>
        <Banner>
            <StyleSubTitle><StyleSpan>Everything</StyleSpan> in one click.</StyleSubTitle>
            <Img src='/img/illustration.png' alt=''/>
        </Banner>
        <StyleSubTitle2 as='h3'>Find your <StyleSpan>plin</StyleSpan>!</StyleSubTitle2>
        <MyForm></MyForm>
    </>
  )
}
