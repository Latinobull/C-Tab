import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/Appbar';
import Main_En from './components/English/Main_En';
import Main_Sp from './components/Spanish/Main_Sp';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Appbar />
          <Router>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/en" component={Main_En} />
            <Route exact path="/sp" component={Main_Sp} />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
