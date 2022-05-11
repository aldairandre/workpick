import { useState }from 'react'
import {StyleForm,StyeledInputsContainer,InputData,TxtLorem,InputSub} from './styleForm'

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