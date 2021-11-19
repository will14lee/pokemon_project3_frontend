import './App.css'
import React from "react"
import Home from './components/Home'
import Pokemons from './components/Pokemons'
import Trainers from './components/Trainers'
import Intro from './components/NewGame'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path= "/" element= { <Home/> }/>
          <Route path= '/adventure' element= {<Intro/>}/>
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