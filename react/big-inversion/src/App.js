import React from 'react';
import PersonCard from './Components/PersonCard'


function App() {
  return (
    <div>
    <PersonCard firstName='Jane' lastName='Doe' hairColor='Grey' age={42}/>
    </div>
  );
}

export default App;
