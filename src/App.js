import './App.css'
import React from "react"
import Home from './components/Home'
import CreatedPokemon from './components/CreatedPokemon'
import CreatedPokemonTrainers from './components/CreatedPokemonTrainers'
import NewGame from './components/NewGame'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path= "/" element= { <Home/> }/>
          <Route path= '/game/start' element= {<NewGame/>}/>
          <Route path= "/pokemon" element= { <CreatedPokemon />}/>
          <Route path= "/pokemon_trainer" element= { <CreatedPokemonTrainers/>}/>
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