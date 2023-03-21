
import './App.css';
import React from 'react';
import Name from './Class/basic.js'
import Greeting from './Class/basic.js'
import BatchName from './Class/name.js'

function App() {
  return (
    // <div className="App">
    //    <h1>Welcome <Names /> </h1>
       
    // </div>
    <div>
   { /*<Greeting />*/}
    <BatchName /></div>
   
  );
}

export default App;

// function Names(){
//   return(
//     <div className="name">
//     <h1>Gokul</h1>
//     </div>
//   )
// }
function Details(props) {
  return (
    <div className="card">
      <img src={props.img} alt="name" />
      <h2>
        <span>{props.access}</span>
        {props.name}
      </h2>
      <p>{props.batch}</p>
    </div>
  );
}



 
