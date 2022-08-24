import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Appbar from './components/AppbarEn';
import Main_En from './components/English/Main_En';
import Main_Sp from './components/Spanish/Main_Sp';
import Footer from './components/Footer';
import Leaders_En from './components/English/Leaders_En';
import Ministry_En from './components/English/Ministry_En';
import Socials_En from './components/English/Socials_En';
import FounderEn from './components/English/FounderEn';
import AppbarSp from './components/AppbarSp';
import FooterSp from './components/FooterSp';
import PastorsEn from './components/English/PastorsEn';
import JoinUsEn from './components/English/JoinUsEn';
import ClassesEn from './components/English/ClassesEn';
import { createTheme, ThemeProvider } from '@mui/material';
import OurBeliefs from './components/English/OurBeliefs';
let location = window.location.href.split('/');

const theme = createTheme({
  primary: { main: '#8B0000', second: '#9E2832' },
  secondary: { main: '#F4F2EC' },
  accent: { main: '#E8E3D6', second: '#D6CDB5' },
  typography: { fontFamily: 'QuincyCF, sans-serif' },
});
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
        <ThemeProvider theme={theme}>
          <div className="content-wrap">
            <Router>
              {appbar}
              <Routes>
                <Route exact path="/" element={<Welcome />} />
                {/* English Routes */}

                <Route exact path="/en" element={<Main_En />} />
                <Route exact path="/en/ourfounder" element={<FounderEn />} />
                <Route exact path="/en/ourteam" element={<Leaders_En />} />
                <Route exact path="/en/ministries" element={<Ministry_En />} />
                <Route exact path="/en/pastors" element={<PastorsEn />} />
                <Route exact path="/en/socials" element={<Socials_En />} />
                <Route exact path="/en/ourservices" element={<JoinUsEn />} />
                <Route
                  exact
                  path="/en/ourbiblestudies"
                  element={<ClassesEn />}
                />
                <Route exact path="/en/OurBeliefs" element={<OurBeliefs />} />
                {/* Spanish Routes */}
                <Route exact path="/sp" element={<Main_Sp />} />
              </Routes>
            </Router>
          </div>
          {footer}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
