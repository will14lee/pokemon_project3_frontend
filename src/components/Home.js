import React from 'react'
import {useState, useEffect} from 'react';


const CreatedPokemons = () => {
    const [pokemon, setPokemon] = useState([])
    const [pokemonTrainer, setPokemonTrainer]= useState([])
    useEffect(() => {
        fetch('http://localhost:9292/pokemons')
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[])

    useEffect(()=> {
        fetch('http://localhost:9292/pokemon_trainers')
        .then(resp=> resp.json())
        .then(data=> setPokemonTrainer(data))
    },[]
    )

    function PokemonForm(char){
        const ptId= char.pokemon_trainer_id
        const numbers= {id: {one:35},id: {one: 36},three: 3}
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
              <button>Edit</button>
              <button>Delete</button>
              <hr></hr>
          </div>
          )
        }
        
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

        const renderPokemon = () => {
          return pokemon.map(perChara=> PokemonForm(perChara))
        }
        
        
        const renderPokemonTrainers= () => {
            return pokemonTrainer.map(perChara=> PokemonTrainerForm(perChara))
        }
        return (
            <div>
                <h2>Previously made Pokemon!</h2>
            { renderPokemon()} 
                <h2>Previously made Pokemon Trainers!</h2>
            { renderPokemonTrainers()}
        </div>
    )
  }


const Home = () => {
  return (
    <div className="App">
    <p><CreatedPokemons/></p>
    </div>
);
}

export default Home;