import React from 'react'
import { Router, Link } from 'react-router-dom';

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
    //   <div>
    <Router>
        <nav>
            {/* <p>Hey</p> */}
          <Link to="/">Home</Link>
          {/* <Link to="books">Books</Link>
          <Link to="authors">Authors</Link>
          <Link to="authors/new">Create Author</Link> */}
        </nav>
    </Router>
    //   </div>
    )
  }


export default Navbar
