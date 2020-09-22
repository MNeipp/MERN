import React from 'react'

const Results = ({pokedex}) => {
    return (
      <ul>
        {pokedex.map((pokemon => <li>{pokemon.name}</li>))}
      </ul>
    )
}

export default Results
