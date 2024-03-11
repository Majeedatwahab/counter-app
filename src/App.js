import {React, useState} from 'react';
import './App.css';

function App() {
  const[counter, setCounter] = useState(0);

// increase counter//
  const increaseCount =()=>{
    setCounter(counter => counter + 1);
  };

  //decrease counter//

  const decreaseCount =()=>{
    if(counter > 0){
      setCounter(counter => counter - 1);
    };
  
    }

    //reset counter//
    
  const resetCount =()=>{
    setCounter(0);
  };



  return (
    <div className="App">
      <h1>A SIMPLE COUNTER APP</h1>
      <p>Count: {counter}</p>
      <button onClick={increaseCount}> INCREASE</button>
      <button onClick={decreaseCount}> DECREASE</button>
      <button onClick={resetCount}> RESET</button>
    
  
    </div>
  );
}

export default App;
