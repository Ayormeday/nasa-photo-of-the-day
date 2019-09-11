import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

const testApi = "https://lambda-github-api-server.herokuapp.com/"
const functionalApi = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

function App() {
const [images, setimage] = useState();

useEffect(() => {
  axios.get(testApi)
    .then(resImages => {debugger
      console.log(resImages.data)
    })
  
}, []);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
