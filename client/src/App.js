import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Appbar from './components/Appbar';
class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <Router>
          <Route exact path="/" component={Main} />
        </Router>
      </div>
    );
  }
}

export default App;
