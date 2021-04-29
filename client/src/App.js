import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/Appbar';
class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <Router>
          <Route exact path="/" component={Welcome} />
        </Router>
      </div>
    );
  }
}

export default App;
