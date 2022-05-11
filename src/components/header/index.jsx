import {StyleHeader, Container, StyleNav, StyleUl, StyleSpan, StyleTitle} from './styleHeader' 

export default function Header() {
  return (
    <StyleHeader>
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
