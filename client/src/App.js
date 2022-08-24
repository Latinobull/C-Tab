import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './components/AppbarEn';
import MainEn from './components/English/MainEn';
import MainSp from './components/Spanish/Main_Sp';
import Footer from './components/Footer';
import LeadersEn from './components/English/LeadersEn';
import MinistryEn from './components/English/MinistryEn';
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
  typography: {
    h6: { fontFamily: 'Poppins, sans-serif' },
    fontFamily: 'QuincyCF, sans-serif',
  },
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
      window.location.replace('/en');
    }
    return (
      <div className="page-container">
        <ThemeProvider theme={theme}>
          <div className="content-wrap">
            <Router>
              {appbar}
              <Routes>
                {/* English Routes */}

                <Route exact path="/en" element={<MainEn />} />
                <Route exact path="/en/ourfounder" element={<FounderEn />} />
                <Route exact path="/en/ourteam" element={<LeadersEn />} />
                <Route exact path="/en/ministries" element={<MinistryEn />} />
                <Route exact path="/en/pastors" element={<PastorsEn />} />
                <Route exact path="/en/ourservices" element={<JoinUsEn />} />
                <Route
                  exact
                  path="/en/ourbiblestudies"
                  element={<ClassesEn />}
                />
                <Route exact path="/en/OurBeliefs" element={<OurBeliefs />} />
                {/* Spanish Routes */}
                <Route exact path="/sp" element={<MainSp />} />
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
