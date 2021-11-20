import './App.css'
import React from "react"
import Home from './components/Home'
import Pokemons from './components/Pokemons'
import Trainers from './components/Trainers'
import TrainerForm from './components/TrainerForm'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonForm from './components/PokemonForm'
import EditPokemon from './components/EditPokemon'
import TrainerDetails from './components/TrainerDetails'
import PokemonDetails from './components/PokemonDetails'
import EditTrainer from './components/EditTrainer'


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path= "/" element= { <Home/> }/>
          <Route path= "/trainers" element= { <Trainers/>}/>
          <Route path= '/trainers/new' element= {<TrainerForm/>}/>
          <Route path= '/trainers/:id/edit' element= {<EditTrainer/>}/>
          <Route path= '/trainers/:id' element= {<TrainerDetails/>}/>
          <Route path= "/pokemons" element= { <Pokemons />}/>
          <Route path= "/pokemons/new" element= { <PokemonForm />}/>
          <Route path= '/pokemons/:id/edit' element={<EditPokemon/>}/>
          <Route path= '/pokemons/:id' element={<PokemonDetails/>}/>
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