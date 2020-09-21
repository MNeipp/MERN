import React from 'react'

const Results = ({inputs}) => {
    const {firstName, lastName, email, password, confirmPassword} = inputs
    return (
        <div>
            <p className="text-large">First Name: {firstName}</p>
            <p className="text-large">Last Name: {lastName}</p>
            <p className="text-large">Email: {email}</p>
            <p className="text-large">Password: {password}</p>
            <p className="text-large">Confirm Password:{confirmPassword}</p>
        </div>
    )
}
export default Results
