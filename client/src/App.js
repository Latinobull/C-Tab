import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/Appbar';
import Main_En from './components/English/Main_En';
import Main_Sp from './components/Spanish/Main_Sp';
import Footer from './components/Footer';
import Leaders_En from './components/English/Leaders_En';
import Ministry_En from './components/English/Ministry_En';
import Socials_En from './components/English/Socials_En';
import AboutEn from './components/English/AboutEn';
class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Appbar />
          <Router>
            <Route exact path="/" component={Welcome} />
            {/* English Routes */}
            <Route exact path="/en" component={Main_En} />
            <Route exact path="/en/about" component={AboutEn} />
            <Route exact path="/en/leaders" component={Leaders_En} />
            <Route exact path="/en/ministries" component={Ministry_En} />
            <Route exact path="/en/socials" component={Socials_En} />
            {/* Spanish Routes */}
            <Route exact path="/sp" component={Main_Sp} />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
