import React from 'react';
import { useHistory } from "react-router-dom";

import '../styles/Cards.css';

export default function Cards({ index, setIndex, things, complete, setComplete }) {

  const history = useHistory();

  function handleClickAdd() {
    complete[index + 1] = things[index];
    setComplete(complete);
    setIndex(index + 1);
  }

  function handleClickDelete() {
    if (complete.index !== undefined) {
      complete.index = undefined;
      setComplete(complete);
    }
    setIndex(index + 1);
  }

  if (index >= things.length) {
    return (
      <div className="cards">
        <button onClick={() => { history.push('/result') }}>See Result</button>
      </div>
    )
  } else {
    return (
      <div className="cards">
        <p>Checklist {index + 1}/{things.length}</p>
        <p>{things[index]}</p>
        <div className="buttons">
          <button onClick={handleClickAdd}>o</button>
          <button onClick={handleClickDelete}>x</button>
        </div>
      </div>
    )
  }
}



