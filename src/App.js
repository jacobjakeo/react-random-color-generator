import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const color = randomColor();
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <br />
      <div>
        {color}
        <br />
        <button
          onClick={() => {
            const newColor = randomColor();
          }}
        >
          Generate Color
        </button>
      </div>
    </div>
  );
}
