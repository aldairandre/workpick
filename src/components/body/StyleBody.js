import styled from 'styled-components'

const StyleSubTitle = styled.h1`
    @media (max-width:768px){
        font:normal normal 800 2.3rem/normal 'Poppins', sans-serif;
        margin: 46px 0px 0px 0px;
    }
`


const StyleSubTitle2 = styled(StyleSubTitle)`
    @media (max-width:768px){
        font:normal normal 800 2.3rem/normal 'Poppins', sans-serif;
        text-align: center;
        margin: 60px 0;
    }
    @media(min-width:375px){
        padding: 0px 47px;
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
    @media(max-width:768px){
        width:60%;
    }
`

export {StyleSubTitle,StyleSubTitle2,StyleSpan,Banner,Img}