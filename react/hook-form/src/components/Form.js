import React from 'react'

const Form = props => {
    const {inputs, setInputs} = props;
    const getInfo = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
            <form>
                <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" onChange={getInfo}/>
                </div>
                <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName"  onChange={getInfo}/>
                </div>
                <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"  onChange={getInfo}/>
                </div>
                <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password"  onChange={getInfo}/>
                </div>
                <div>
                <label htmlFor="confpass">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confpass" onChange={getInfo}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
    )
}

export default Form