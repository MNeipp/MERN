import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
    }
}
incrementAge = () =>{
            this.setState(state => ({ age: state.age + 1 }))
        }
    
    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <> 
            <h1>{ lastName }, {firstName}</h1>
            <h4>Age: {this.state.age}</h4>
            <h4>Hair Color: {hairColor}</h4>
            <button onClick={ this.incrementAge }>Birthday Button for {firstName} {lastName}</button>
            </> 
        )
    }
}

export default PersonCard;