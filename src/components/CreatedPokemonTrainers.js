import React from 'react'
import {useState, useEffect} from 'react';
import { baseUrl } from '../globals';

const CreatedPokemonTrainers = () => {
    const [pokemonTrainer, setPokemonTrainer]= useState([])

    useEffect(()=> {
        fetch(`${baseUrl}/pokemon_trainers`)
        .then(resp=> resp.json())
        .then(data=> setPokemonTrainer(data))
    },[]
    )
        
    function PokemonTrainerForm(char){
        return(
            <div>
                <p>Name: {char.name}</p>
                <p>Gender: {char.gender}</p>
                <p>Pokemon: {char.pokemons.map(t=> t.name + " ")}</p>
                <button>Edit</button>
                <button>Delete</button>
                <hr></hr>
            </div>
            )
        }
                
        const renderPokemonTrainers= () => {
            return pokemonTrainer.map(perChara=> PokemonTrainerForm(perChara))
        }
        return (
            <div className="App">
                <h2>Previously made Pokemon Trainers!</h2>
            { renderPokemonTrainers()}
        </div>
    );
  };

export default CreatedPokemonTrainers;