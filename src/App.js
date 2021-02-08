import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';
import Random from './Random.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

{/* Iteration 1 */}
<div>
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
</div>

{/* Iteration 2 */}
<div>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
</div>

      </header>
    </div>
  );
}

export default App;
