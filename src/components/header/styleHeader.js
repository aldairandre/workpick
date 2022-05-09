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
  list-style: none;
  display:flex;
  @media(max-width:768px){
    flex-direction: column;
  }
`

export {StyleHeader, Container, StyleNav, StyleUl, StyleSpan}