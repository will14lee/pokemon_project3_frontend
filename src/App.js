import './App.css';
import NameAndGender from './components/NameAndGender';
import StartJourney from './components/StartJourney';
import FirstPokemon from './components/FirstPokemon';
import Home from './components/Home';
import {useState, useEffect} from 'react';

const CreatedPokemons = () => {
    const [search, setSearch]= useState("")
    const [pokemon, setPokemon] = useState([])
    const [filteredChara, setFilteredChara]= useState([])
    useEffect(() => {
        fetch('http://localhost:9292/pokemons')
        .then(resp => resp.json())
        .then(data =>setPokemon(data))
    },[])

      function CharacterForm(char){
        return(
          <div>
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.pokemon_type}</p>
          </div>
          )
        }
        function handleOnChange(e){
          setSearch(e.target.value)
          setFilteredChara(pokemon.filter(({Name})=> Name.includes(search)))
        }
        
        const renderCharacters = () => {
          const charactersToRender = filteredChara.length > 0 ? filteredChara : pokemon
          return charactersToRender.map(perChara=> CharacterForm(perChara))
        }
        return (
          <div>
            {/* <h3>My Pokemon ${lokemon}</h3> */}
            {/* <input placeholder= "Search..." onChange={handleOnChange }></input><button>Submit</button> */}
            { renderCharacters()} 
        </div>
    )
  }




function App() {
  return (
    <div>
      <NameAndGender/>
      <StartJourney/>
      <FirstPokemon/>
      <Home/>
    </div>

  );
}

export default App;