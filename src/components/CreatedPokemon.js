import React from "react";
import {useState, useEffect} from 'react';
import { baseUrl } from "../globals";


const CreatedPokemon= () =>{
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/pokemons`)
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[])

    function PokemonForm(char){
        
        const ptId= char.pokemon_trainer_id
        
        function owned(){
            if (ptId) {
                return  <p>Owned by Trainer</p>                  
            }
            else {
                return  <p>Not owned by Trainer</p>                  
            }
        }

        return(
          <div>
              <p>Name: {char.name}</p>
              <p>Type: {char.pokemon_type}</p>
              <p> {owned()} </p>
              <button onClick="">Edit</button>
              <button>Delete</button>
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

export default CreatedPokemon;