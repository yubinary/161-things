import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Things from "./pages/Things.js";
import Intro from "./pages/Intro.js";
import Result from "./pages/Result.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Intro} exact path='/' />
        <Route component={Things} exact path='/161-things' />
        <Route component={Result} exact path='/result' />
      </Switch>
    </Router>
  );
}

export default App;
