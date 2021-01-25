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

  function displayThing(order) {
    return (
      <p>{things[index + order]}</p>
    )
  }

  function displayCard() {
    if (index === 0) {
      return (
        <div className="cards">
          <div className="card empty">
          </div>
          <div className="card current">
            {displayThing(0)}
            <div className="buttons">
              <button onClick={handleClickAdd}>o</button>
              <button onClick={handleClickDelete}>x</button>
            </div>
          </div>
          <div className="card after" onClick={() => setIndex(index + 1)}>
            {displayThing(1)}
          </div>
        </div>
      )
    } else if (index === things.length - 1) {
      return (
        <div className="cards">
          <div className="card before" onClick={() => setIndex(index - 1)}>
            {displayThing(-1)}
          </div>
          <div className="card current">
            {displayThing(0)}
            <div className="buttons">
              <button onClick={handleClickAdd}>o</button>
              <button onClick={handleClickDelete}>x</button>
            </div>
          </div>
          <div className="card empty">
          </div>
        </div>
      )
    } else {
      return (
        <div className="cards">
          <div className="card before" onClick={() => setIndex(index - 1)}>
            {displayThing(-1)}
          </div>
          <div className="card current">
            {displayThing(0)}
            <div className="buttons">
              <button onClick={handleClickAdd}>o</button>
              <button onClick={handleClickDelete}>x</button>
            </div>
          </div>
          <div className="card after" onClick={() => setIndex(index + 1)}>
            {displayThing(1)}
          </div>
        </div>
      )
    }
  }


  return (
    <div>
      {displayCard()}
    </div >
  )
}



