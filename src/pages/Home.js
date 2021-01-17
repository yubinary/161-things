import React, { useState, useEffect } from 'react';
// import axios from "axios";
import { INITTHINGS } from '../components/constant.js';

import '../styles/Home.css';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [things, setThings] = useState(INITTHINGS);
  const [complete, setComplete] = useState([]);

  function checkOff(things, i) {
    return (
      <p>{things[i]}</p>
    )
  }

  function handleClickAdd() {
    setComplete([...complete, things[index]]);
    setIndex(index + 1);
  }

  return (
    <div className="home">
      <div className="progress">
      </div>
      <div className="card">
        {checkOff(things, index)}
        <button onClick={() => setIndex(index + 1)}>x</button>
        <button onClick={handleClickAdd}>o</button>
      </div>
    </div >
  )
}



