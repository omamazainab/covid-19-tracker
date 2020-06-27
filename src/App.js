import React,{useEffect,useState} from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    // async function fetchRepos(){

    //   const response = await fetch('https://api.cord19.vespa.ai/search'); 
    //   const data = await response.json();
    //   console.log(data);
       
    // }
    // fetchRepos();


  }
  
  , [])
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
