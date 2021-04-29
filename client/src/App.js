import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/Appbar';
import Main_En from './components/English/Main_En';
import Main_Sp from './components/Spanish/Main_Sp';
class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/en" component={Main_En} />
          <Route exact path="/sp" component={Main_Sp} />
        </Router>
      </div>
    );
  }
}

export default App;
