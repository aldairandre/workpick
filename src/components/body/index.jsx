import styled from 'styled-components'

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
    <Banner>
        <p><StyleSpan>Everything</StyleSpan> in one click</p>
        <Img src='/img/illustration.png' alt=''/>
    </Banner>
  )
}
