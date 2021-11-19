import React from 'react'
import NameAndGender from './NameAndGender';
// import StartJourney from './StartJourney';
import PokemonMaker from './PokemonMaker'
import Farewell from './Farewell';


const Intro = () => {
    return (
        <div>
            <NameAndGender/> 
            {/* <StartJourney/> */}
            <PokemonMaker/>
            <Farewell/>
        </div>
    )
}

export default Intro;
