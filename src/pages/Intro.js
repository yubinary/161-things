import React from 'react';
import { useHistory } from "react-router-dom";

export default function Intro() {

  const history = useHistory();

  return (
    <div>
      <h1>161 Things Every Cornellian Should Do</h1>
      <p>
        Cornell is a big place. There’s a lot to do.
        Here’s a list of 161 things that every Cornellian should do during their time on the Hill.
        It was originally compiled from a 2005 email survey to students, and was updated this summer.
        Best of luck!
      </p>
      <button onClick={() => { history.push('/161-things') }}>Start</button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,288L60,261.3C120,235,240,181,360,149.3C480,117,600,107,720,112C840,117,960,139,1080,128C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  )
}



