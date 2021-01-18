import React from 'react';

import '../styles/Cards.css';

export default function Cards({ index, setIndex, things, complete, setComplete }) {

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

  function displayCard(order) {
    if (index + order < 0) {
      return (
        <div>
          <h1>161 Things Every Cornellian Should Do</h1>
          <p>
            Cornell is a big place. There’s a lot to do.
            Here’s a list of 161 things that every Cornellian should do during their time on the Hill.
            It was originally compiled from a 2005 email survey to students, and was updated this summer.
            Best of luck!
          </p>
        </div>
      )
    }
    return (
      <p>{things[index + order]}</p>
    )
  }

  return (
    <div className="cards">
      <div className="card before" onClick={() => setIndex(index - 1)}>
        {displayCard(-1)}
      </div>
      <div className="card current">
        {displayCard(0)}
        <div className="buttons">
          <button onClick={handleClickAdd}>o</button>
        </div>
      </div>
      <div className="card after" onClick={() => setIndex(index + 1)}>
        {displayCard(1)}
      </div>
    </div >
  )
}



