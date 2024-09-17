
import React, {useState} from "react"

function Component() {
    const [name, setName] = useState('guest');
    const [age,setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('sam');
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const employStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}> set name</button>

            <p>Age: {age} </p>
            <button onClick={updateAge}> increase age</button>

            <p>is employed: {isEmployed ? 'yes' : 'no'} </p>
            <button onClick={employStatus}> employ status</button>
        </div>
    );
 }

export default Component