import React from 'react';
import './App.css';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';
import Random from './Random.js';
import BoxColor from './BoxColor.js';




function App() {

  return (
    //Iteration 1
    <div>
      <IdCard   
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"/>

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      
      <Greetings lang="de" word="Ludwig" />
      <Greetings lang="fr" word="François" />
      {/* <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>      */}

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>    
    )
}
export default App;
