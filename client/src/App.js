import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/AppbarEn';
import Main_En from './components/English/Main_En';
import Main_Sp from './components/Spanish/Main_Sp';
import Footer from './components/Footer';
import Leaders_En from './components/English/Leaders_En';
import Ministry_En from './components/English/Ministry_En';
import Socials_En from './components/English/Socials_En';
import AboutEn from './components/English/AboutEn';
import AppbarSp from './components/AppbarSp';
import FooterSp from './components/FooterSp';
let location = window.location.href.split('/');
class App extends Component {
  render() {
    let appbar;
    let footer;
    if (location[3] === 'en') {
      appbar = <Appbar />;
      document.title = 'Christian Tabernacle';
      footer = <Footer />;
    } else if (location[3] === 'sp') {
      appbar = <AppbarSp />;
      document.title = 'Tabernaculo Christiano';
      footer = <FooterSp />;
    } else {
      appbar = <div></div>;
      footer = <div></div>;
    }
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            {appbar}
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
        {footer}
      </div>
    );
  }
}

export default App;
