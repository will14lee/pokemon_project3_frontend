import React, {useState} from 'react'
import { baseUrl } from "../globals";



const PokemonForm =()=> {
    const [yourPokeName, setYourPokeName]= useState([])
    const [yourPokeType, setYourPokeType]= useState("")
    const [yourLevel, setYourLevel]= useState("")
    const [yourPokeTrainerId, setYourPokeTrainerId]= useState("")

    function handleSubmitPokemon(e) {
        e.preventDefault();
        const form={
          name: yourPokeName,
          pokemon_type: yourPokeType,
          level: yourLevel,
          pokemon_trainer_id: yourPokeTrainerId
        }
        fetch(`${baseUrl}/pokemons`, {
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
            alert("Your Pokemon Has Been Submitted!")
        })
    }
    return(
        <div className="App">
        <p>Create a Pokemon</p>
        <p>
        <label>Name</label><input onChange={(e)=>setYourPokeName(e.target.value)}/>
        <label>Type</label><select onChange={(e)=>setYourPokeType(e.target.value)}>
            <option value="---------">---------</option>
            <option value="Fire">Fire-Type</option>
            <option value="Water">Water-Type</option>
            <option value="Grass">Grass-Type</option>
        </select>
        </p>
        <label>Level(1-100)</label><input onChange={(e)=>{setYourLevel(e.target.value)}}/>
        <p><button onClick={handleSubmitPokemon}>Submit</button></p>
        </div>
    );
}

export default PokemonForm;