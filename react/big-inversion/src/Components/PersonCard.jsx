import React, {useState} from 'react';




const PersonCard = (props) => {
    const [age, setAge] = useState(props.age)
    const onClick = () =>{
        setAge(age + 1)
    }

    return(
        <>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick = {onClick}>Age Me!</button>
        </>
    );
}

export default PersonCard