import styled from 'styled-components'

const StyleSubTitle = styled.h1`
    @media(min-width:1024px){
        font-size:2rem;
    }
    @media (max-width:768px){
        font:normal normal 800 2.3rem/normal 'Poppins', sans-serif;
        margin: 46px 0px 0px 0px;
    }
`


const StyleSubTitle2 = styled(StyleSubTitle)`
    @media(min-width:1024px){
            padding:0 0;
            width: 24%;
            text-align: center;
            font-size: 2rem;
            margin-right: 10rem;
    }
    @media(max-width:1023px){
        font:normal normal 800 2.3rem/normal 'Poppins', sans-serif;
        text-align: center;
        margin: 60px 0;
    }
    @media(max-width:425px){
        padding: 0 47px;
    }

    @media(max-width:375px){
        padding: 0px 22px;
    }
    @media(max-width:320px){
        padding: 0px 0px;
    }
   
`
const StyleSubTitle3 = styled(StyleSubTitle2)`
     @media(min-width:1024px){
            width: auto;
            margin-right:0;
            margin-bottom: 5rem;
            font-size: 2rem;
    }
`


const StyleSpan = styled.span`
    color: #6C63FF;
`
const Banner = styled.div`
    max-width: 100%;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    display: flex;
    @media(min-width:1024px){
        max-width: 90%;
        justify-content: space-between;
        margin: 10rem auto;
    }
    @media(max-width:768px){
        flex-direction: column;
        align-items: center;
        width: 100%; 
        margin: 1rem auto;
    }
`

const Img = styled.img`
    width: 80%;
    @media(min-width:1024px){
        width:41%
    }
    @media(max-width:768px){
        width:69%;
    }
`

export {StyleSubTitle,StyleSubTitle2,StyleSpan,Banner,Img,StyleSubTitle3}