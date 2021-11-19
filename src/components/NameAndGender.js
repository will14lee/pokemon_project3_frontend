import React, {useState} from 'react'

const NameAndGender = () => {
    const [yourName, setYourName]= useState("")
    const [yourGender, setYourGender]= useState("")
    function handleChange(t){
        return console.log(t)
    }
    
    function handleSubmitTrainer(e) {
        e.preventDefault();
        const form={
          name: yourName,
          gender: yourGender
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
            setYourName("")
            setYourGender("")
            alert("Your Trainer Has Been Submitted!")
        })
    }
    // const {yourGender, setYourGender}= useState("---------")
    return (
    <div className="App">
    <header className= "header">
    </header>
    <h1>Hello, and welcome to the world of Pokemon!</h1>
    <h2>Proffessor Pine: My name is Professor Pine.</h2>
    <h3>Professor Pine: What is your name young lad?</h3>
    <p>You: My name is ... <input placeholder= "Red" onChange={(e)=>setYourName(e.target.value)} value={yourName}/> </p>
    <p>Professor Pine: Please tell me, what gender are you? </p>
    <p>  I am a <select onChange={(e)=>{setYourGender(e.target.value)}}>
        <option value="---------">---------</option>
        <option value="Boy">Boy</option>
        <option value="Girl">Girl</option>
        <option value="Trans-boy">Trans-boy</option>
        <option value="Trans-girl">Trans-girl</option>
        <option value="Gender-fluid">Gender-Fluid</option>
        <option value="Non-binary">Non-binary</option>
    </select>. 
    </p>
    <p><button onClick={handleSubmitTrainer}>Submit</button></p>
    </div>
    );
}


export default NameAndGender