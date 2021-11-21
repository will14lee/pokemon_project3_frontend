import React, {useState, useEffect} from "react";
import { useParams, NavLink }from 'react-router-dom'
import { baseUrl } from "../globals";
import { useNavigate } from 'react-router';


const TrainerDetails= () =>{
    const [trainer, setTrainer] = useState([])
    const {id} =useParams()
    const navigate= useNavigate()


    useEffect(() => {
        fetch(`${baseUrl}/pokemon_trainers/${id}`)
        .then(resp => resp.json())
        .then(data =>setTrainer(data))
    },[])

    function deleteTrainer(e) {
        e.preventDefault();
        fetch(`${baseUrl}/pokemon_trainers/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp=> resp.json())
        .then(resp=> {console.log(resp)
        alert("Your Trainer Has Been Deleted!")

        })
        navigate(`../trainers`, {replace: true})
    }

    function TrainerForm(char){


        return(
          <div>
              <p>ID: {char.id} </p>
              <p>Name: {char.name}</p>
              <p>Gender: {char.gender}</p>
              {/* <p>Pokemon: {char.pokemons.map(t=> t.name + " ")}</p> */}
              <button><NavLink to ={`/trainers/${char.id}/edit`}>Edit Trainer</NavLink></button>
              <button onClick= {deleteTrainer}>Delete</button>
              <hr></hr>
          </div>
          )
        }

return (
    <div className="App">
        <h2>Trainer Details</h2>
    { TrainerForm(trainer) } 
    </div>
);
};

export default TrainerDetails
