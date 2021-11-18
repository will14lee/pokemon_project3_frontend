import React from 'react'
import Navlink from 'react-router-dom';

const Navbar= () =>{
    return(
        <div className="App">
            <ul>
                <li><Navlink to= "/">Home</Navlink></li>
                <li><Navlinke to= "/start_adventure">Start Adventure</Navlinke></li>
                <li><Navlink to= "/created_pokemon">Created Pokemon</Navlink></li>
                <li><Navlink to= "/created_pokemon_trainers">Created Pokemon Trainers</Navlink></li>
            </ul>
        </div>
    );
};

export default Navbar