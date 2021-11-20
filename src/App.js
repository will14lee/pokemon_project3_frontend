import './App.css'
import React from "react"
import Home from './components/Home'
import Pokemons from './components/Pokemons'
import Trainers from './components/Trainers'
import TrainerForm from './components/TrainerForm'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonForm from './components/PokemonForm'


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path= "/" element= { <Home/> }/>
          <Route path= '/trainers/new' element= {<TrainerForm/>}/>
          <Route path= "/pokemons/new" element= { <PokemonForm />}/>
          <Route path= "/pokemons" element= { <Pokemons />}/>
          <Route path= "/trainers" element= { <Trainers/>}/>
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