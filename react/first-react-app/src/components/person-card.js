import React, { useState } from 'react';

const PersonCard = props =>{
    const [state,setState] = useState({
        age:props.age
    });
    const Birthday = () => {
        setState({age : state.age + 1});
    }
    
    return(
        <> 
        <h1>{ props.lastName }, {props.firstName}</h1>
        <h4>Age: {state.age}</h4>
        <h4>Hair Color: {props.hairColor}</h4>
        <button onClick={Birthday}>Birthday Button for {props.firstName} {props.lastName}</button>
        </> 
        )
    }

export default PersonCard