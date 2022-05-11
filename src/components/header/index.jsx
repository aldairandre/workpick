import {StyleHeader, Container, StyleNav, StyleUl, StyleSpan, StyleTitle} from './styleHeader' 

export default function Header() {
  return (
    <StyleHeader className='animate__animated animate__fadeInDown animate__delay-1s'>
      <Container>
        <StyleNav>
          <StyleTitle>Work <StyleSpan>plin</StyleSpan></StyleTitle>
          <StyleUl>
            <li>About</li>
            <li>Places</li>
            <li>Contact</li>
          </StyleUl>
        </StyleNav>
      </Container>
    </StyleHeader>
  )
}
