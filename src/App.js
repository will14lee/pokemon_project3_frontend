import './App.css'
import Home from './components/Home'
import CreatedPokemon from './components/CreatedPokemon'
import CreatedPokemonTrainers from './components/CreatedPokemonTrainers'
// import NewGame from './components/NewGame'
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hi from './components/Hi';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path= "/" element= { <Home/> }/>
          <Route path= '/new_game' element= {<CreatedPokemon/>}/>
          {/* <Route path= "/new_game" element= { <Home/> }/> */}
          {/* <Route path= "/new_game" element= { <Hi/> }/> */}
          <Route path= "/created_pokemon" element= { <CreatedPokemon />}/>
          <Route path= "/created_pokemon_trainers" element= { <CreatedPokemonTrainers/>}/>
        </Routes>
      </Router>
        {/* <NameAndGender/>
        <StartJourney/>
        <FirstPokemon/>
        <Farewell/> */}
    </div>

  );
}

export default App;