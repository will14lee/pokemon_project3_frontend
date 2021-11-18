import React from 'react'
import {useState, useEffect} from 'react';


const CreatedPokemons = () => {
    const [search, setSearch]= useState("")
    const [pokemon, setPokemon] = useState([])
    const [filteredChara, setFilteredChara]= useState([])
    useEffect(() => {
        fetch('http://localhost:9292/pokemons')
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[])

      function CharacterForm(char){
        return(
          <div>
          <p>Name: {char.name}</p>
          <p>Type: {char.pokemon_type}</p>
          </div>
          )
        }
        function handleOnChange(e){
          setSearch(e.target.value)
          setFilteredChara(pokemon.filter(({Name})=> Name.includes(search)))
        }
        
        const renderCharacters = () => {
          const charactersToRender = filteredChara.length > 0 ? filteredChara : pokemon
          return charactersToRender.map(perChara=> CharacterForm(perChara))
        }
        return (
          <div>
            {/* <h3>My Pokemon ${lokemon}</h3> */}
            {/* <input placeholder= "Search..." onChange={handleOnChange }></input><button>Submit</button> */}
            { renderCharacters()} 
        </div>
    )
  }


const Home = () => {
  return (
    <div className="App">
    <h2>Previously made Pokemon!</h2>
    <p><CreatedPokemons/></p>
    </div>
);
}

export default Home;