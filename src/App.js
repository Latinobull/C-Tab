import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './English/AppbarEn';
import MainEn from './English/MainEn';
import MainSp from './Spanish/Main_Sp';
import Footer from './English/Footer';
import LeadersEn from './English/LeadersEn';
import MinistryEn from './English/MinistryEn';
import FounderEn from './English/FounderEn';
import AppbarSp from './Spanish/AppbarSp';
import FooterSp from './Spanish/FooterSp';
import PastorsEn from './English/PastorsEn';
import JoinUsEn from './English/JoinUsEn';
import ClassesEn from './English/ClassesEn';
import { createTheme, ThemeProvider } from '@mui/material';
import OurBeliefs from './English/OurBeliefs';
let location = window.location.href.split('/');

const theme = createTheme({
  primary: { main: '#B90000', second: '#9E2832' },
  secondary: { main: '#FFFBF6' },
  accent: { main: '#E8E3D6', second: '#D6CDB5' },
  typography: {
    h6: { fontFamily: 'AirbnbCereal, sans-serif' },
    fontFamily: 'FontSpring, sans-serif',
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
            <div className="background">
              <Router>
                {appbar}

                <Routes>
                  {/* English Routes */}

                  <Route exact path="/en" element={<MainEn />} />
                  <Route exact path="/en/ourfounder" element={<FounderEn />} />
                  <Route exact path="/en/ourteam" element={<LeadersEn />} />
                  <Route exact path="/en/ministries" element={<MinistryEn />} />
                  <Route exact path="/en/leaders" element={<PastorsEn />} />
                  <Route exact path="/en/join us" element={<JoinUsEn />} />
                  <Route
                    exact
                    path="/en/ourbiblestudies"
                    element={<ClassesEn />}
                  />
                  <Route exact path="/en/beliefs" element={<OurBeliefs />} />
                  {/* Spanish Routes */}
                  <Route exact path="/sp" element={<MainSp />} />
                </Routes>
              </Router>
            </div>
          </div>
          {footer}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
