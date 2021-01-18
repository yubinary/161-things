import React, { useState, useEffect } from 'react';
import { INITTHINGS } from '../components/constant.js';
import Cards from "../components/Cards.js";

import '../styles/Home.css';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [things, setThings] = useState(INITTHINGS);
  const [complete, setComplete] = useState([]);

  return (
    <div className="home">
      <div className="progress">
      </div>
      <Cards
        index={index}
        setIndex={setIndex}
        things={things}
        complete={complete}
        setComplete={setComplete}
      />
    </div >
  )
}



