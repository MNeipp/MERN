import React, { useState } from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) =>{
    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {age} </p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}


export default PersonCard