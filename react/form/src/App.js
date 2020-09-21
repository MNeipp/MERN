import React, {useState} from 'react';

import Form from './components/form'
import Results from './components/results'



function App() {
  const [state, setState] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  return (
    <div className="container">
      <Form inputs={state} setInputs = {setState}/>
      <Results inputs={state}/>
    </div>
  );
}

export default App;
