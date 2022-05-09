import styled  from "styled-components"

const StyleHeader = styled.header`
  width:100%;
  padding: 20px 0; 
`

const Container = styled.div`
  width:1000px;
  max-width: 100%;
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
  @media (max-width: 768px){
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
  @media(max-width:768px){
    flex-direction: column;
    height: 91px;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
  }
`

export {StyleHeader, Container, StyleNav, StyleUl, StyleSpan, StyleTitle}