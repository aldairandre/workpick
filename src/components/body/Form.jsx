import { useState } from 'react';
import styled from 'styled-components'

const StyleForm = styled.form`
    @media(max-width:768px){
        width:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;
    }
`

const StyleInput = styled.input`
    @media(max-width:768px){
        width: 37%;
        margin: 1rem 0px;
        padding: 15px;
        font-weight: 900;
        font-size: 1.2rem;
        border-radius: 1rem;
        color: black;
    }
    @media(max-width:425px){
        width:65%;
    }
    @media(max-width:375px){
        width:75%;
    }
    @media(max-width:320px){
        width:85%;
    }
`

const StyleInputSubmit = styled.input`
    @media(max-width:768px){
        width:33%;
        margin: 1rem 0px;
        padding: 15px;
        font-weight: 900;
        font-size: 1.2rem;
        text-align: center;
        border-radius: 1rem;
        color: #fff;
        background:  #000;
    }
    @media(max-width:425px){
        width:60%;
    }
    @media(max-width:375px){
        width:65%;
    }
    @media(max-width:320px){
        width:72%;
    }
`

export default function MyForm() {
    const [peopleNum, setPeople] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 
    }

    return (
        <StyleForm onSubmit={handleSubmit}>
            <StyleInput
            type="number" 
            value={peopleNum}
            onChange={(e) => setPeople(e.target.value)}
            placeholder='How many people?'
            />
            <StyleInput
            type="number" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='For how longe?'
            />
            <StyleInput type="text" value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder='Your bast e-mail!'
            />
            <StyleInputSubmit type="submit" value='Submit'/>
        </StyleForm>
    )
}