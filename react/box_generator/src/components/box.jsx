import React from 'react'

const Box = ({color, height}) => {
    const boxStyle = {
        background: color, 
        height: `${height}px`,
        width:`${height}px`,
        margin: '8px'
    };
    return (
        <div  style={boxStyle}></div>
    )
}

export default Box
