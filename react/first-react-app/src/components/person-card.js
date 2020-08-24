import React, { Component } from 'react';

class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <> 
            <h1>{ lastName }, {firstName}</h1>
            <h4>Age: {age}</h4>
            <h4>Hair Color: {hairColor}</h4>
            </> 
        )
    }
}

export default PersonCard;