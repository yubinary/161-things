import React, { useState, useEffect } from 'react';

import '../styles/Cards.css';

export default function Cards({ index, setIndex, things, complete, setComplete }) {

  function handleClickAdd() {
    setComplete([...complete, things[index]]);
    setIndex(index + 1);
  }

  function displayCard(order) {
    return (
      <p>{things[index + order]}</p>
    )
  }

  return (
    <div className="cards">
      <div className="card before">
        {displayCard(-1)}
      </div>
      <div className="card current">
        <div className="buttons">
          <button onClick={() => setIndex(index + 1)}>x</button>
          <button onClick={handleClickAdd}>o</button>
        </div>
        {displayCard(0)}
      </div>
      <div className="card after">
        {displayCard(1)}
      </div>
    </div >
  )
}



