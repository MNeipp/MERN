import React from 'react';


const PersonCard = props =>{
    const {lastName, firstName, age, hairColor} = props
    return(
        <> 
        <h1>{ lastName }, {firstName}</h1>
        <h4>Age: {age}</h4>
        <h4>Hair Color: {hairColor}</h4>
        <button>Birthday Button for {firstName} {lastName}</button>
        </> 
        )
    }

export default PersonCard