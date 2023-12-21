import './App.css';
import { Age } from './Age';
import { useState,useEffect } from 'react';
import axios from 'axios';




function App() {
  
  const [fact,setFact] = useState(null)

  const generateFact = () => {
    axios.get('https://catfact.ninja/fact')
    .then(res => {
      setFact(res.data.fact)
    })
  }

  useEffect(() => {

    generateFact()

  },[])

  //generateFact()

  return (
    <div className="App">
     <button onClick={generateFact}>Generate Cat Fact</button>
     <p>{fact}</p>
     <br />
     <Age />
    </div>
  );
}


export default App;
