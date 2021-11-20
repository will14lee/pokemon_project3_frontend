import React, {useState} from 'react'
import { baseUrl } from "../globals";
import { useNavigate } from 'react-router';



const PokemonForm =()=> {
    const [yourPokeName, setYourPokeName]= useState([])
    const [yourPokeType, setYourPokeType]= useState("")
    const [yourLevel, setYourLevel]= useState("")
    const [yourPokeTrainerId, setYourPokeTrainerId]= useState("")
    const navigate= useNavigate()
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
            setYourPokeType("---------")
            setYourLevel("")
            setYourPokeTrainerId("")
            alert("Your Pokemon Has Been Submitted!")
        })
        navigate("../pokemons", {replace: true})
    }

    return(
        <div className="App">
        <p>Create a Pokemon</p>
        <p>
        <label>Name</label><input value= {yourPokeName} onChange={(e)=>setYourPokeName(e.target.value)}/>
        <label>Type</label><select value= {yourPokeType} onChange={(e)=>setYourPokeType(e.target.value)}>
            <option value="---------">---------</option>
            <option value="Fire">Fire-Type</option>
            <option value="Water">Water-Type</option>
            <option value="Grass">Grass-Type</option>
        </select>
        </p>
        <input placeholder= "Level(1-100)" value={yourLevel} onChange={(e)=>{setYourLevel(e.target.value)}}/>
        <p>Trainer Id<input onChange={(e)=>setYourPokeTrainerId(e.target.value)}/></p>
        <p><button onClick={handleSubmitPokemon}>Submit</button></p>
        </div>
    );
}

export default PokemonForm;