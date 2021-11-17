import './App.css';
import {React} from 'react'

function App() {
  return (
    <div className="App">
      <header className= "header">
      </header>
      <h1>Hello, and welcome to the world of Pokemon!</h1>
      <h2>???: My name is Professor Pine.</h2>
      <h3>Professor Pine: What is your name young lad?</h3>
      <p>You: My name is ...<input placeholder= "Red"></input> </p>
      <p><button>Submit</button></p>
      <p>Professor Pine: Please tell me, what gender are you? </p>
      <p>  I am a <select>
          <option value="---------">---------</option>
          <option value="Boy">Boy</option>
          <option value="Girl">Girl</option>
          <option value="Trans-boy">Trans-boy</option>
          <option value="Trans-girl">Trans-girl</option>
          <option value="Gender-fluid">Gender-Fluid</option>
          <option value="Non-binary">Non-binary</option>
        </select>. 
      </p>
      <p><button>Submit</button></p>
      <p>Professor Pine: Ah. I see.</p>
      <p>Well then. Let me tell you, there is an entire world of Pokemon out there to be explored!</p>
      <p>And now that you are the age of 18 I'd like to requrest that you'd be willing to help me.</p>
      <p>For you see, I'm not as young as I used to be... And well</p>
      <p>Would you be willing to help me by going out and capturing the Pokemon of this region in order to progress our understanding of these fascinating creatures?</p>
      <select>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <p><button>Submit</button></p>      <p>Excellent! Now before I ask you to set off, I must give you a Pokemon to help you in your adventure</p>
      <p>Now, please choose one of these Pokemon to help you on your journey!</p>
      <p>I want... 
        <select>
          <option value="---------">---------</option>
          <option value="Charmander">Charmander the Fire-Type</option>
          <option value="Squirtle">Squirtle the Water-Type</option>
          <option value="Bulbasaur">Bulbasaur the Grass-Type</option>
        </select>
      </p>
      <p><button>Submit</button></p>
      <p>Ah. I see. A fine starter! Please cherish your first Pokemon. Train with it, fight with it, and have many adventures with it!</p>
      <p>Now please be safe in your exploration of the world... Of Pokemon!!! </p>
        <p><button>See ya!</button></p>



    </div>
  );
}

export default App;
