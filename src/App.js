import './App.css';
import Navbar from './components/Navbar';
import NameAndGender from './components/NameAndGender';
import StartJourney from './components/StartJourney';
import FirstPokemon from './components/FirstPokemon';
import Farewell from './components/Farewell';
import Home from './components/Home';
import CreatedPokemon from './components/CreatedPokemon';
import CreatedPokemonTrainers from './components/CreatedPokemonTrainers'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Switch>
      </Switch> */}
        {/* <Route exact path= "/" component= { Home }/> */}
        {/* <Route exact path= "/created_pokemon" component= { CreatedPokemon }/> */}
        {/* <Route exact path= "/created_pokemon_trainers" components= { CreatedPokemonTrainers}/> */}
        <NameAndGender/>
        <StartJourney/>
        <FirstPokemon/>
        <Farewell/>
        <Home/>
        <CreatedPokemon/>
        <CreatedPokemonTrainers/>
    </div>

  );
}

export default App;