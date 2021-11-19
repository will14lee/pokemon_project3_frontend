import React, {useState} from 'react'

const FirstPokemon =()=> {
    const [yourPokeName, setYourPokeName]= useState([])
    const [yourPokeType, setYourPokeType]= useState("")
    const [yourLevel, setYourLevel]= useState("")
    const [yourOwnership, setYourOwnership]= useState("")
    const [yourPokeTrainerId, setYourPokeTrainerId]= useState("")

    const charmander= {
        name: "Charmander",
        pokemon_type: "Fire",
        level: 5,
        pokemon_trainer_id: 1,
        owned_by_trainer: true,
    } 
    const squirtle= {
        name: "Squirtle",
        pokemon_type: "Water",
        level: 5,
        pokemon_trainer_id: 2,
        owned_by_trainer: true,
    } 
    const bulbasaur=
    {
        name: "Bulbasaur",
        pokemon_type: "Grass",
        level: 5,
        pokemon_trainer_id: 3,
        owned_by_trainer: true,
    } 
    function handleSubmitPokemon(e) {
        e.preventDefault();
        const form={
          name: yourPokeName,
          pokemon_type: yourPokeType,
          level: yourLevel,
          pokemon_trainer_id: yourPokeTrainerId,
          owned_by_trainer: yourOwnership

        }
        fetch("http://localhost:9292/pokemon_trainers", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( form )
        })
        .then(resp=> resp.json())
        .then(resp=> {console.log(resp)
            setYourPokeName("")
            setYourPokeType("")
            setYourLevel("")
            setYourPokeTrainerId("")
            setYourOwnership("")
            alert("Your Pokemon Has Been Submitted!")
        })
    }
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