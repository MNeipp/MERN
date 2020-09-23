import React from 'react'

const Results = ({pokedex}) => {
    return (
      <ul>
        {pokedex.map(((pokemon,index) => <li key={index}>{pokemon.name}</li>))}
      </ul>
    )
}

export default Results
