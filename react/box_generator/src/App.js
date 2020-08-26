import React, { useState } from 'react'
import Box from "./components/box"
import Input from "./components/Input"


function App() {
  const [box, setBox] = useState({colors:[]})
  return (
    <div className="App">
      <div className="text-center mt-4">
        <Input box={box} setBox={setBox}/>
      </div>
      <div className="d-flex flex-wrap justify-content-around mt-4">
        {box.colors.map((color => <Box color={color[0]} height={color[1]}/>))}
      </div>
    </div>
  );
}

export default App;
