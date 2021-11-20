import React, {useState, useEffect} from "react";
import { useParams, NavLink }from 'react-router-dom'
import { baseUrl } from "../globals";
import { useNavigate } from 'react-router';


const PokemonDetails= () =>{
    const [pokemon, setPokemon] = useState([])
    const {id} =useParams()
    const navigate= useNavigate()


    useEffect(() => {
        fetch(`${baseUrl}/pokemons/${id}`)
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[id])

    function deletePokemon(e) {
        e.preventDefault();
        fetch(`${baseUrl}/pokemons/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp=> resp.json())
        .then(resp=> {console.log(resp)
        alert("Your Pokemon Has Been Deleted!")

        })
        navigate(`../pokemons`, {replace: true})
    }

    function PokemonForm(char){
        
        function editPokemon(){
            return console.log(`Editing ${char.name}`)
        }

        return(
          <div>
              <p>ID: {char.id} </p>
              <p>Name: {char.name}</p>
              <p>Level: {char.level}</p>
              <p>Type: {char.pokemon_type}</p>
              <button><NavLink to ={`/pokemons/${char.id}/edit`}>Edit Pokemon</NavLink></button>
              <button onClick= {deletePokemon}>Delete</button>
              <hr></hr>
          </div>
          )
        }

return (
    <div className="App">
        <h2>Pokemon Details</h2>
    { PokemonForm(pokemon) } 
    </div>
);
};

export default PokemonDetails
