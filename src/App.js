import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CheckList from "./pages/CheckList.js";
import Intro from "./pages/Intro.js";
import Result from "./pages/Result.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Intro} exact path='/' />
        <Route component={CheckList} exact path='/161-things' />
        <Route component={Result} exact path='/result' />
      </Switch>
    </Router>
  );
}

export default App;
