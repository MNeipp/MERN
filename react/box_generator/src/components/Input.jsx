import React, { useState } from 'react'

const Input = ({box, setBox}) => {
    const [color, setColor] = useState('');
    const [height, setHeight] = useState('');
    const getColor = (e) => {setColor(e.target.value)};
    const getHeight = (e) => {setHeight(e.target.value)};
    const createBox = (e) => {
        e.preventDefault();
        setBox({colors:[...box.colors, [color,height]]})
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={createBox}>
                <div className="form-group">
                <input type="text" onChange = {getColor} className="form-control-lg" placeholder="Enter Color"/>
                </div>
                <div className="form-group">
                <input type="text" onChange = {getHeight} className="form-control-lg" placeholder="Enter Height"/>
                </div>
                <input type="submit" value="Add Box" className="btn btn-primary btn-lg"/>
            </form>
        </div>
    )
}

export default Input
