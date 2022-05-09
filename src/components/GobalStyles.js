import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
        
    }

  body {
        color: #000;
        font-size: 1.15em;
        font-family: 'Poppins', sans-serif;
        margin:0;
        @media (max-width:768px){
            padding: 0px 20px;
        }
    }


  img {
        max-width: 100%;
    }
`