import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import churchImg from '../img/churchBuilding.jpg';
import OptionEn from './OptionsEn';
import backgroundImg from '../videos/MainVideo.mp4';
import Carousel from './Carousel';
const MainGrid = styled(Grid)(({ theme }) => ({
  height: '800px',
  textAlign: 'center',
  justifyContent: 'center',
}));
const MyVideo = styled('video')`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  min-width: 100%;
  max-height: 980px;
`;
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  padding: '20px 25px',
  border: 'solid 3px white',
  borderRadius: '1px',
  marginTop: '15px',
  width: '250px',
  fontSize: '20px',
  transition: 'border .07s',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'solid 0px white',
  },
}));
const MissionGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.secondary.main,
  justifyContent: 'center',
  fontSize: '50px',
  padding: '160px 0px',
}));
const MissionText = styled(Typography)(({ theme }) => ({
  maxWidth: '1300px',
  fontSize: '30px',
  textAlign: 'center',
  color: theme.primary.main,
  fontWeight: '400',
}));
const MyQuote = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${churchImg})`,
  maxWidth: '99vw',
  minHeight: '70vh',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

const QuoteText = styled(Typography)(({ theme }) => ({
  maxWidth: '500px',
  backgroundColor: theme.secondary.main,
  borderRadius: '1px',
  fontSize: '45px',
  color: theme.primary.main,
  padding: '50px 125px',
}));
const QuoteText2 = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
}));
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '120px',
  color: theme.primary.main,
}));
const OpenText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '180px',
  color: theme.secondary.main,
  letterSpacing: '2px',
}));

const MainContainer = styled(Grid)(({ theme }) => ({
  height: '550px',
  background: '#8B0000',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}));
export default function Main_En() {
  return (
    <div>
      <MyVideo autoPlay loop muted id="video">
        <source src={backgroundImg} type="video/mp4" />
      </MyVideo>
      <MainGrid container alignItems="center">
        <Grid item>
          <OpenText>A House On Fire</OpenText>
        </Grid>
      </MainGrid>
      <MissionGrid container direction="row" alignItems="center">
        <Grid item>
          <Headers>Our Mission</Headers>
          <MissionText variant="h6">
            We believe that we are not just a church but a home and a hospital
            for the broken. Everything we do is guided by the power of the Holy
            Spirit and the love that Christ has shown us. Christian Tabernaclue
            was established in 1984 by our founder Josefina De La Rosa. Her
            vision still stands true to this day with her daughter and out
            pastor, Reverend Dr.Damaris Perez, continuing the legacy.
          </MissionText>
        </Grid>
      </MissionGrid>
      <MainContainer>
        <h1>Worship With US</h1>
        <h1>IMAGE GOES HERE</h1>
        <div>
          <h6>
            We're here for you & we'd love to have you! Find out more about our
            location, bible study & more
          </h6>
          <button>Click Here</button>
        </div>
      </MainContainer>
      {/* <Carousel /> */}
      <OptionEn />
      <MyQuote container>
        <QuoteText variant="h5">
          “Then have them make a sanctuary for me, and I will dwell among them."
          <QuoteText2 variant="h6">Exodus 25:8</QuoteText2>
        </QuoteText>
      </MyQuote>
    </div>
  );
}
