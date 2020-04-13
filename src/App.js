import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Productos from './components/Productos';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
