import { useState }from 'react'
import styled from 'styled-components   '

const StyleForm = styled.form`
    @media(min-width:1024px){
        display: grid;
        grid-template-columns: 50% 50%;
        width:1000px;
        max-width: 66%;
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
    @media(max-width:1024px){
        width: 50%;
        padding: 1rem;
    }
    @media(max-width:1023px){
        margin: 1rem auto;
        width: 82%;  
    }
`

export default function MyForm(){
    const [peopleNum, setPeopleNum] = useState("");
    const [time, setTime] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Numbr of people: ${peopleNum}`)
      }

    return(
        <StyleForm onSubmit={handleSubmit}>
            <StyeledInputsContainer>
                <InputData type="number" value={peopleNum} onChange={(e) => setPeopleNum(e.target.value)}placeholder='How many people?'/>
                <InputData type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder='For longer time?'/>
                <InputData type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Best email!'/>
            </StyeledInputsContainer>
            <TxtLorem>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, blanditiis sapiente repellat dolorum unde maiores aliquid nam porro adipisci impedit eveniet necessitatibus, ut excepturi voluptatibus molestiae dignissimos deleniti iure modi?
                </p>
            </TxtLorem>
            <InputSub type="submit" value='Submit'/>
        </StyleForm>
    )
}