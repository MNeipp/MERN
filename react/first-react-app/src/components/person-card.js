import React from 'react';

const PersonCard = props =>{
    return(
        <> 
        <h1>{ props.lastName }, {props.firstName}</h1>
        <h4>Age: {props.age}</h4>
        <h4>Hair Color: {props.hairColor}</h4>
        <button>Birthday Button for {props.firstName} {props.lastName}</button>
        </> 
        )
    }

export default PersonCard