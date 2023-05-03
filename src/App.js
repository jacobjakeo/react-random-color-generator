import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import colorwheel from './colorwheel.png';

export default function App() {
  const [currentColor, setCurrentColor] = useState(randomColor());
  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <h1 style={{ color: currentColor }}>Random Color Generator</h1>
      <img src={colorwheel} className="App-logo" alt="colorwheel" />
      <div style={{ backgroundColor: currentColor }}>
        Generated Color: {currentColor} <br />
        <br />
        <button
          onClick={() => {
            const newColor = randomColor();
            setCurrentColor(newColor);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
