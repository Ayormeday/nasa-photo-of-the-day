import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from "./header/Title";
import Date from "./header/Date";
import Explanation from "./body/Explanation";

const functionalApi = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function App() {
  const [images, setimage] = useState({});

  useEffect(() => {
    axios
      .get(functionalApi)
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
      <img src={images.hdurl} />
      <Explanation explanation={images.explanation} />
      <small>&copy;{images.copyright}</small>
    </div>
  );
}

export default App;
