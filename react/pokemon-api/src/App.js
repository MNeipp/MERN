import React, {useState} from 'react';
import Results from './components/Results'
import axios from 'axios'

function App() {
  const [pokedex, setPokedex] = useState([])
  const getPokemon = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then (response => setPokedex(response['data']['results']))
    }
  

  return (
    <div className="App">
      <button onClick = {getPokemon}>Fetch Pokemon</button>
      <Results pokedex = {pokedex}/>

    </div>
  );
}

export default App;
