import styled from 'styled-components   '

const StyleForm = styled.form`
    @media(min-width:1024px){
        display: grid;
        grid-template-columns: 50% 50%;
        width:1000px;
        max-width: 50%;
        margin: 0 auto;
        column-gap: 2rem;
    }

    @media(max-width:1023px){
        width:55%;
        margin: 0 auto;
        text-align: center;
    }
   
`

const StyeledInputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width:1024px){
        row-gap:2rem;
    }
`

const InputData = styled.input`
    border-radius: 10px;
    outline:none;

    @media(max-width:1024px){
        padding: .7rem ;
        margin: 0px 0px;
        font-size:1.2rem;
        
    }
    @media(min-width:1023px){
        padding: .7rem ;
        font-size:1.2rem;
    }
    @media(max-width:320px){
        font-size:1rem;
    }
`

const TxtLorem = styled.div`

    border: 1px solid #000;
    padding: 12px;
    text-align: auto;
    @media(max-width:1023px){
       display:none;
    }
`

const InputSub = styled(InputData)`
    background: #000;
    color: #6C63FF;
    border-radius: 10px;
    outline: none;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    font-weight:900;
    width: 70%;
    margin: 40px auto;
    @media(min-width:1024px){
        width: 50%;
        padding: 1rem;
    }
    @media(max-width:1023px){
        margin: 1rem auto;
        width: 82%;  
    }
`

export {StyleForm,StyeledInputsContainer,InputData,TxtLorem,InputSub}