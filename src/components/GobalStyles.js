import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap')


    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
        
    }

  body {
        color: #000;
        font-size: 1.15em;
        font-family: 'Poppins', sans-serif;
    }

    li { 
        font-weight: 100;
    }

  img {
        max-width: 100%;
    }
`