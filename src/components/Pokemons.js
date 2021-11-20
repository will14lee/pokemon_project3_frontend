import React, {useState, useEffect} from "react";
import { useParams, NavLink }from 'react-router-dom'
import { baseUrl } from "../globals";


const Pokemons= () =>{
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/pokemons`)
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[pokemon])

    function PokemonForm(char){

        return(
          <div>
              <p>ID: {char.id} </p>
              <p>Name: {char.name}</p>
              <p>Level: {char.level}</p>
              <p>Type: {char.pokemon_type}</p>
              {/* <p>Trainer: {char.pokemon_trainer[0]}</p> */}
              <button><NavLink to ={`/pokemons/${char.id}`}>Pokemon Details</NavLink></button>
              <hr></hr>
          </div>
          )
        }


        const renderPokemon = () => {
            return pokemon.map(perChara=> PokemonForm(perChara))
          }
return (
    <div className="App">
        <h2>Previously made Pokemon!</h2>
    { renderPokemon()} 
    </div>
);
};

export default Pokemons;