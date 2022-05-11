import styled  from "styled-components"

const StyleHeader = styled.header`
  padding: 20px 0px;
`

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

const StyleTitle = styled.h1`
  text-shadow: 2px 4px rgba(209,209,209,.7);
  @media (max-width:768px){
    font:normal normal 800 2.5rem/normal 'Poppins', sans-serif;
  }
`

const StyleSpan = styled.span`
  color: #6C63FF;
`

const StyleNav = styled.nav`
  display: flex;
  @media(min-width: 1024px){
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 1023px){
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

const StyleUl = styled.ul`
  display:flex;
  list-style: none;
  padding: 0;
  font-weight: 300;
  font-size: 1.5rem;
  @media(min-width: 1024px){
    width:30%;
    justify-content: space-between;
    font-size: 1.2rem;
  }
  @media(max-width:1023px){
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
    height: 100px;
  }
`

export {StyleHeader, Container, StyleNav, StyleUl, StyleSpan, StyleTitle}