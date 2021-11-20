import React, {useState, useEffect} from "react";
import { useParams, NavLink }from 'react-router-dom'
import { baseUrl } from "../globals";
import { useNavigate } from 'react-router';


const EditPokemon= () =>{
    const [yourPokeName, setYourPokeName]= useState([])
    const [yourPokeType, setYourPokeType]= useState("")
    const [yourLevel, setYourLevel]= useState("")
    const [yourPokeTrainerId, setYourPokeTrainerId]= useState("")
    const [pokemon, setPokemon] = useState([])
    
    const {id}=useParams()
    const navigate= useNavigate()
    
    useEffect(() => {
        fetch(`${baseUrl}/pokemons/${id}`)
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[id])


    function handleEditPokemon(e) {
        e.preventDefault();
        const form={
          name: yourPokeName,
          pokemon_type: yourPokeType,
          level: yourLevel,
          pokemon_trainer_id: yourPokeTrainerId
        }
        fetch(`${baseUrl}/pokemons/${id}`, {
            method: "PATCH",
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
            alert("Your Pokemon Has Been Updated!")
        })
        navigate(`../pokemons/${id}`, {replace: true})
    }


    function PokemonForm(char){

        return(
          <div>
              <p>ID: {char.id} </p>
              <p>Name: {char.name}</p>
              <p>Level: {char.level}</p>
              <p>Type: {char.pokemon_type}</p>
              <hr></hr>
          </div>
          )
        }

return (
    <div className="App">
        <h2>Edit Pokemon</h2>
        <h2>Former Pokemon Details</h2>
        { PokemonForm(pokemon) } 
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
        <p>
            <button onClick={handleEditPokemon}>Submit</button>
            <button><NavLink to ={`/pokemons/${id}`}>Pokemon Details</NavLink></button>
            <button><NavLink to= {"/pokemons"}>Created Pokemon</NavLink></button>
        </p>
    </div>
);
};

export default EditPokemon;