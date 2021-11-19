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

        function editPokemon(){
            return console.log(`Editing ${char.name}`)
        }
        function deletePokemon(){
            return console.log(`Deleting ${char.name}!`)
        }

        return(
          <div>
              <p>Name: {char.name}</p>
              <p>Type: {char.pokemon_type}</p>
              <p> {owned()} </p>
              <button onClick= {editPokemon}>Edit</button>
              <button onClick= {deletePokemon}>Delete</button>
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