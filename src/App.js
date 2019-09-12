import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from "./header/Title";
import Date from "./header/Date";
import Explanation from "./body/Explanation";
import Img from "./body/img"

// const functionalApi = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const testApi = "https://lambda-github-api-server.herokuapp.com/";
function App() {
  const [images, setimage] = useState({});

  useEffect(() => {
    axios
      .get(testApi)
      .then(resImages => {
        setimage(resImages.data);
        console.log(resImages.data);
      })
      .catch(error => {
        console.log("invalid API");
      });
  }, []);

  return (
    <div className="App">
      <Title title={images.title} />
      <Date date={images.date} />
      <Img img={images.hdurl} />
      <Explanation explanation={images.explanation} />
      <small>&copy;{images.copyright}</small>
    </div>
  );
}

export default App;
