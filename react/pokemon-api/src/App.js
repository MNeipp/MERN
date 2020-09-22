import React, {useState, useEffect} from 'react';
import Results from './components/Results'

let i = 1
function App() {
  const [pokedex, setPokedex] = useState([])
  const getPokemon = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => response.json())
      // .then(response => console.log(response['results']))
      .then (response => setPokedex(response['results']))
      i++
    }
  

  return (
    <div className="App">
      <button onClick = {getPokemon}>Fetch Pokemon</button>
      <Results pokedex = {pokedex}/>

    </div>
  );
}

export default App;
