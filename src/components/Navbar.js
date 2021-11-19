import React from 'react'
import { Link, Router} from 'react-router-dom';

// const Navbar= () =>{
//     return(
//             <ul>
//                 <li><Link to= "/">Home</Link></li>
//                 <li><Link to= "/start_adventure">Start Adventure</Link></li>
//                 <li><Link to= "/created_pokemon">Created Pokemon</Link></li>
//                 <li><Link to= "/created_pokemon_trainers">Created Pokemon Trainers</Link></li>
//             </ul>
//     );
// };
  
const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><a href= "http://localhost:3000/">Home</a></li>
          <li><a href= "http://localhost:3000/new_game">New Game</a></li>
          <li><a href= "http://localhost:3000/created_pokemon">Created Pokemon</a></li>
          <li><a href= "http://localhost:3000/created_pokemon_trainers">Created Pokemon Trainers</a></li>
        </ul>
      </nav>
    )
  }


export default Navbar
