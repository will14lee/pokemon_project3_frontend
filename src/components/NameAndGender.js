import React from 'react'


const NameAndGender = () => {
    return (
    <div className="App">
    <header className= "header">
    </header>
    <h1>Hello, and welcome to the world of Pokemon!</h1>
    <h2>???: My name is Professor Pine.</h2>
    <h3>Professor Pine: What is your name young lad?</h3>
    <p>You: My name is ...<input placeholder= "Red"></input> </p>
    <p>Professor Pine: Please tell me, what gender are you? </p>
    <p>  I am a <select>
        <option value="---------">---------</option>
        <option value="Boy">Boy</option>
        <option value="Girl">Girl</option>
        <option value="Trans-boy">Trans-boy</option>
        <option value="Trans-girl">Trans-girl</option>
        <option value="Gender-fluid">Gender-Fluid</option>
        <option value="Non-binary">Non-binary</option>
    </select>. 
    </p>
    <p><button>Submit</button></p>
    </div>
    );
}


export default NameAndGender