import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar= () =>{
    return(
        <div className="App">
            <ul>
                <li><NavLink to= "/">Home</NavLink></li>
                <li><NavLink to= "/start_adventure">Start Adventure</NavLink></li>
                <li><NavLink to= "/created_pokemon">Created Pokemon</NavLink></li>
                <li><NavLink to= "/created_pokemon_trainers">Created Pokemon Trainers</NavLink></li>
            </ul>
        </div>
    );
};
  
export default Navbar