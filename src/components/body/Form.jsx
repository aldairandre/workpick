import { useState } from 'react';


export default function MyForm() {
  const [name, setName] = useState("");
  const [peopleNum, setPeopleNum] = useState("");
  const [time, setTime] = useState("");

  return (
    <form>
        <input
          type="text" 
          value={peopleNum}
          onChange={(e) => setPeopleNum(e.target.value)}
          placeholder='How many people?'
        />
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='For how longe?'
        />
        <input type="text" value={time}
          onChange={
              (e) => {
                setTime(e.target.value)
                console.log({time})
          }}
          placeholder='Your bast e-mail!'
        />
    </form>
  )
}