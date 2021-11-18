import React from 'react'

const FirstPokemon =()=> {
    return(
        <div className="App">
        <p>Now, please choose one of these Pokemon to help you on your journey!</p>
        <p>I want... 
        <select>
            <option value="---------">---------</option>
            <option value="Charmander">Charmander the Fire-Type</option>
            <option value="Squirtle">Squirtle the Water-Type</option>
            <option value="Bulbasaur">Bulbasaur the Grass-Type</option>
        </select>
        </p>
        <p><button>Submit</button></p>
        </div>
    );
}

export default FirstPokemon;