import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home';
import './App.css';
import Checkout from './Checkout.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>About</h1>
          </Route>
          <Route path="/">

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
