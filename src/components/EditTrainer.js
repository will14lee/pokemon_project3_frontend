import React, {useState, useEffect} from "react";
import { useParams, NavLink }from 'react-router-dom'
import { baseUrl } from "../globals";
import { useNavigate } from 'react-router';


const EditTrainer= () =>{
    const [trainerName, setTrainerName]= useState([])
    const [trainerGender, setTrainerGender]= useState("")
    const [pokemon, setPokemon] = useState([])
    
    const {id}=useParams()
    const navigate= useNavigate()
    
    useEffect(() => {
        fetch(`${baseUrl}/pokemon_trainers/${id}`)
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[id])


    function handleEditPokemon(e) {
        e.preventDefault();
        const form={
          name: trainerName,
          gender: trainerGender,
        }
        fetch(`${baseUrl}/pokemon_trainers/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( form )
        })
        .then(resp=> resp.json())
        .then(resp=> {console.log(resp)
            setTrainerName("")
            setTrainerGender("---------")
            alert("Your Trainer Has Been Updated!")
        })
        navigate(`../trainers/${id}`, {replace: true})
    }


    function TrainerForm(char){

        return(
          <div>
              <p>ID: {char.id} </p>
              <p>Name: {char.name}</p>
              <p>Gender: {char.gender}</p>
              <hr></hr>
          </div>
          )
        }

return (
    <div className="App">
        <h2>Edit Trainer</h2>
        <h2>Former Trainer Details</h2>
        { TrainerForm(pokemon) } 
        <p><label>Name</label><input value= {trainerName} onChange={(e)=>setTrainerName(e.target.value)}/></p>
        <p>
        <select value= {trainerGender} onChange={(e)=>{setTrainerGender(e.target.value)}}>
            <option value="---------">---------</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
            <option value="Trans-boy">Trans-boy</option>
            <option value="Trans-girl">Trans-girl</option>
            <option value="Gender-fluid">Gender-Fluid</option>
            <option value="Non-binary">Non-binary</option>
        </select>. 
        </p>
        <p>
            <button onClick={handleEditPokemon}>Submit</button>
            <button><NavLink to ={`/trainers/${id}`}>Trainer Details</NavLink></button>
            <button><NavLink to= {"/trainers"}>Created trainers</NavLink></button>
        </p>
    </div>
);
};

export default EditTrainer;