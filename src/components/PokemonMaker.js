import React, {useState} from 'react'

const PokemonMaker =()=> {
    const [yourPokeName, setYourPokeName]= useState([])
    const [yourPokeType, setYourPokeType]= useState("")
    const [yourLevel, setYourLevel]= useState("")
    const [yourOwnership, setYourOwnership]= useState("")
    const [yourPokeTrainerId, setYourPokeTrainerId]= useState("")

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
        {/* <input></input> */}
        <select onChange={(e)=>setYourPokeName(e.target.value.name)}>
            <option value="---------">---------</option>
            <option value="Fire">Fire-Type</option>
            <option value="Water">Water-Type</option>
            <option value="Grass">Grass-Type</option>
        </select>
        </p>
        <p><button>Submit</button></p>
        </div>
    );
}

export default PokemonMaker;