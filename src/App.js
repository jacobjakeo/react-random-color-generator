import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import colorwheel from './colorwheel.png';

export default function App() {
  const [currentColor, setCurrentColor] = useState(randomColor());
  console.log(currentColor);
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <img src={colorwheel} className="App-logo" alt="colorwheel" />
      <div>
        Current Color: {currentColor}
        <br />
        <button
          onClick={() => {
            const newColor = randomColor();
            setCurrentColor(newColor);
          }}
        >
          Generate Color
        </button>
      </div>
    </div>
  );
}
