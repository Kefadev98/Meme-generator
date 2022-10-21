import "../style/Main.scss";
import Data from "../data/data";
import { useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  //Includes images from json
  const [allMemeImages, setAllMemeImages] = useState(Data);

  //Get meme image and calculate random number
  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  //Top and bottom text for meme
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      <div className="meme-inputs">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button onClick={getMemeImage}>Get a new meme image 🖼️</button>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <div className="meme-text">
          <h2 className="meme--text-top">{meme.topText}</h2>
          <h2 className="meme--text-bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
