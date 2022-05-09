import {StyleHeader, Container, StyleNav, StyleUl, StyleSpan} from './styleHeader' 

export default function Header() {
  return (
    <StyleHeader>
      <Container>
        <StyleNav>
          <h1>Work<StyleSpan>pick</StyleSpan></h1>
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
