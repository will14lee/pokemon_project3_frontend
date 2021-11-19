import React from 'react'
import { NavLink } from 'react-router-dom';
  
const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/game/start" exact>Start Game</NavLink></li>
          <li><NavLink to="/pokemon" exact>Created Pokemon</NavLink></li>
          <li><NavLink to="/pokemon_trainer" exact>Created Pokemon Trainer</NavLink></li>

          {/* <li><a href= "http://localhost:3000/">Home</a></li>
          <li><a href= "http://localhost:3000/new_game">New Game</a></li>
          <li><a href= "http://localhost:3000/created_pokemon">Created Pokemon</a></li>
          <li><a href= "http://localhost:3000/created_pokemon_trainers">Created Pokemon Trainers</a></li> */}
        </ul>
      </nav>
    )
  }


export default Navbar
