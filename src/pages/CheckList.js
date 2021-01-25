import React, { useState } from 'react';
import { INITTHINGS } from '../components/constant.js';
import ProgressBar from "../components/ProgressBar.js";
import Cards from "../components/Cards.js";

import '../styles/CheckList.css';

export default function CheckList() {
  const [index, setIndex] = useState(0);
  const [things, setThings] = useState(INITTHINGS);
  const [complete, setComplete] = useState({});

  return (
    <div>
      <ProgressBar
        index={index}
        things={things}
      />
      <div className="home">
        <Cards
          index={index}
          setIndex={setIndex}
          things={things}
          complete={complete}
          setComplete={setComplete}
        />
      </div >
    </div>
  )
}



