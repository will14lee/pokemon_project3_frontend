import React from 'react'
import { NavLink } from 'react-router-dom';
  
const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/adventure" exact>Start Adventure</NavLink></li>
          <li><NavLink to="/pokemons" exact>Created Pokemon</NavLink></li>
          <li><NavLink to="/trainers" exact>Created Pokemon Trainers</NavLink></li>
        </ul>
      </nav>
    )
  }


export default Navbar
