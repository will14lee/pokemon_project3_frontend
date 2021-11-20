import React, {useState, useEffect} from "react";
import { useParams, NavLink }from 'react-router-dom'
import { baseUrl } from "../globals";


const Pokemons= () =>{
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/pokemons`)
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[])

    function PokemonForm(char){
        
        const ptId= char.pokemon_trainer_id
        
        // function owned(){
        //     if (ptId) {
        //         return  <p>Owned by Trainer</p>                  
        //     }
        //     else {
        //         return  <p>Not owned by Trainer</p>                  
        //     }
        // }

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
              <NavLink to ={`/pokemons${char.id}/edit`}>Edit Pokemon</NavLink>
              <NavLink to ={`/pokemons${char.id}/pokemon/new`}>Create Pokemon</NavLink>
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

export default Pokemons;