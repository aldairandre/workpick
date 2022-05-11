import  styled  from "styled-components"
import {StyleSubTitle2} from '../body/StyleBody'
import {StyleUl} from '../header/styleHeader'

const StyleFooter = styled.footer`
    width:100%;
    display: flex;
    background: #6C63FF;
    @media(min-width:1024px){
      flex-direction: row-reverse;
      justify-content:space-between;
      align-items:center;
      padding:2rem 9%;
      margin-top:5rem;
    }
    @media(max-width:768px){
      flex-direction: column;
      margin-top: 8rem;
      padding: 3rem 0;
      align-items: center;
    }
`

const StyleTitleFoote = styled(StyleSubTitle2)`
  margin:0; 
  padding:0;
  @media(min-width:1024px){
    width:auto;
  }
`

const StyleFooterUl = styled(StyleUl)`
  font-weight: 600;
  flex-direction: column;
`

export default function Footer() {
  return (
    <StyleFooter>
        <StyleTitleFoote>Work plin</StyleTitleFoote>
        <StyleFooterUl>
            <li>Blog</li>
            <li>Join us</li>
            <li>Help</li>
        </StyleFooterUl>
    </StyleFooter>
  )
}
