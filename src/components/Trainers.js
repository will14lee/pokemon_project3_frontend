import React from 'react'
import {useState, useEffect} from 'react';
import { baseUrl } from '../globals';
import { NavLink } from 'react-router-dom';

const Trainers = () => {
    const [pokemonTrainer, setPokemonTrainer]= useState([])

    useEffect(()=> {
        fetch(`${baseUrl}/pokemon_trainers`)
        .then(resp=> resp.json())
        .then(data=> setPokemonTrainer(data))
    },[pokemonTrainer]
    )
        
    function PokemonTrainerForm(char){ 
        return(
            <div>
                <p>ID: {char.id} </p>
                <p>Name: {char.name}</p>
                <p>Gender: {char.gender}</p>
                <p>Pokemon: {char.pokemons.map(t=> t.name + " ")}</p>
                <button><NavLink to ={`/trainers/${char.id}`}>Trainer Details</NavLink></button>
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

export default Trainers;