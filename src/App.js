import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch /*, Link*/ } from 'react-router-dom'

import Home from './Home';
import Nav from './Nav';

class App extends Component {
  render() {
    return(
      <Router basename="/brewski-app">
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
