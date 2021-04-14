import React from 'react';
import Home from './Home/Home';
import Series from './Series/Series';
import Peliculas from './Peliculas/Peliculas';
import Infantil from './Infantil/Infantil';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/infantil">
          <Infantil />
        </Route>
        <Route path="/peliculas">
          <Peliculas />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
