import React from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props

    const onChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
        <div action="" className="form-group col-4">
            <label htmlFor="" className="form-label">First Name</label>
            <input type="text" className="form-control" onChange = {onChange} name="firstName"/>
        </div>
        <div action="" className="form-group col-4">
            <label htmlFor="" className="form-label">Last Name</label>
            <input type="text" className="form-control" onChange = {onChange} name="lastName"/>
        </div>
        <div action="" className="form-group col-4">
            <label htmlFor="" className="form-label">Email</label>
            <input type="email" className="form-control"  onChange = {onChange}name="email"/>
        </div>
        <div action="" className="form-group col-4">
            <label htmlFor="" className="form-label">Password</label>
            <input type="password" className="form-control" onChange = {onChange} name="password"
            />
        </div>
        <div action="" className="form-group col-4">
            <label htmlFor="" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" onChange = {onChange} name="confirmPassword"/>
        </div>
        </form>
        
    )
}

export default Form
