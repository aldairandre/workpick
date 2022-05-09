import  styled  from "styled-components"
import {StyleSubTitle2} from '../body/StyleBody'
import {StyleUl} from '../header/styleHeader'

const StyleFooter = styled.footer`
    width:100%;
    display: flex;
    background: #6C63FF;
    @media(max-width:768px){
      flex-direction: column;
      margin-top: 8rem;
      padding: 3rem 0;
    }
    @media(max-width:425px){
        
    }
    @media(max-width:375px){

    }
    @media(max-width:320px){
        
    }
`

const StyleTitleFoote = styled(StyleSubTitle2)`
  margin-top: 0px;
  padding:0;
`

const StyleFooterUl = styled(StyleUl)`
  font-weight: 600;
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
