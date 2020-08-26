import React, { useState} from 'react'

const Form = props => {
    const {inputs, setInputs} = props;
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmError, setConfirmError] = useState("")
    const getInfo = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        if(inputs.firstName.length < 1){
            setFirstNameError("Please enter a first name")
        } else if (inputs.firstName.length < 3){
            setFirstNameError("First name must be at least 3 characters")
        } else {
            setFirstNameError()
        }

        if(inputs.lastName.length < 1){
            setLastNameError("Please enter a last name")
        } else if (inputs.lastName.length < 3){
            setLastNameError("Last name must be at least 3 characters")
        } else {
            setLastNameError()
        }
        if(inputs.email.length < 1){
            setEmailError("Please enter a valid email")
        } else if (inputs.email.length < 5){
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError()
        }

        if(inputs.password.length < 8){
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError()
        }

        if(inputs.password !== inputs.confirmPassword){
            setConfirmError("Passwords don't match!")
        } else {
            setConfirmError()
        }
    }
    
        return (
            <form>
                <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" onChange={getInfo}/>
                    {
                        firstNameError?
                    <p style={{color:'red'}}>{firstNameError}</p> : 
                    ''
                    }
                </div>
                <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName"  onChange={getInfo}/>
                {
                        lastNameError?
                    <p style={{color:'red'}}>{lastNameError}</p> : 
                    ''
                    }
                </div>
                <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"  onChange={getInfo}/>
                {
                        emailError?
                    <p style={{color:'red'}}>{emailError}</p> : 
                    ''
                    }
                </div>
                <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password"  onChange={getInfo}/>
                {
                        passwordError?
                    <p style={{color:'red'}}>{passwordError}</p> : 
                    ''
                    }
                </div>
                <div>
                <label htmlFor="confpass">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confpass" onChange={getInfo}/>
                {
                        confirmError?
                    <p style={{color:'red'}}>{confirmError}</p> : 
                    ''
                    }
                </div>
                <input type="submit" value="Submit"/>
            </form>
    )
}

export default Form