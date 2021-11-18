import './App.css';
import NameAndGender from './components/NameAndGender';
import StartJourney from './components/StartJourney';
import FirstPokemon from './components/FirstPokemon';
import Farewell from './components/Farewell';
import Home from './components/Home';
// import {useState, useEffect} from 'react';

function App() {
  return (
    <div>
      <NameAndGender/>
      <StartJourney/>
      <FirstPokemon/>
      <Farewell/>
      <Home/>
    </div>

  );
}

export default App;