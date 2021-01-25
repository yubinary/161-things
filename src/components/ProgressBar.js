import React from 'react';

import '../styles/ProgressBar.css';

export default function ProgressBar({ index, things }) {

  let total = things.length - 1;
  let progress = (index / total) * 100;

  const containerStyles = {
    height: 15,
    backgroundColor: "#f1f1f1",
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: "#585858",
    borderRadius: 'inherit',
  }

  return (
    <div className="progress-bar">
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    </div >
  )
}



