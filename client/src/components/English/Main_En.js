import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import worshipImage from '../../img/worship.jpg';
import crossImg from '../../img/cross.jpg';
import Option_En from './Options_En';
import backgroundImg from '../../videos/welcomeTest.mp4';

const MainGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
}));
const MyVideo = styled('video')`
  position: absolute;

  z-index: -1;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
`;
const MainText = styled('div')(({ theme }) => ({
  paddingLeft: '200px',
  textAlign: 'center',
  color: 'white',
}));
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.accent.main,
  color: 'black',
  padding: '20px 25px',
  borderRadius: '1px',
  marginTop: '15px',
  width: '250px',
  fontSize: '20px',
  '&:hover': {
    backgroundColor: theme.accent.second,
  },
}));
const MissionGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  justifyContent: 'center',
  fontSize: '50px',
  padding: '160px 0px',
  marginBottom: '10px',
}));
const MissionText = styled(Typography)(({ theme }) => ({
  maxWidth: '1300px',
  fontSize: '30px',
  textAlign: 'center',
  color: 'white',
}));
const MyQuote = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${crossImg})`,
  maxWidth: '99vw',
  minHeight: '50vh',
  backgroundSize: 'cover',
  marginTop: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: '50px',
}));

const QuoteText = styled(Typography)(({ theme }) => ({
  maxWidth: '600px',
  backgroundColor: theme.secondary.main,
  opacity: '0.8',
  borderRadius: '12px',
}));
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '120px',
  color: 'white',
}));
const OpenText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '60px',
}));
export default function Main_En() {
  return (
    <div>
      <MyVideo autoPlay loop muted id="video">
        <source src={backgroundImg} type="video/mp4" />
      </MyVideo>
      <MainGrid container direction="row" justify="center" alignItems="center">
        <MainText sx={{ paddingLeft: { xs: '30px', lg: '200px' } }}>
          <OpenText>A house on fire,</OpenText>
          <OpenText>led by the Holy Spirit</OpenText>
          <MyButton
            variant="contained"
            sx={{ width: '250px', height: '50px', fontSize: '20px' }}
            href="/en/our services"
          >
            Join us in Worship
          </MyButton>
        </MainText>
      </MainGrid>
      <MissionGrid container justify="" direction="row" alignItems="center">
        <Grid item>
          <Headers>Our Mission</Headers>
          <MissionText>
            Here at Christian Tabernacle we believe that we are not just a
            church but a home and a hospital for the broken. Everything we do is
            guided by the power of the Holy Spirit and the love that Christ has
            shown us. Christian Tabernacle was established in 1984 by our
            founder Josefina De La Rosa. Her vision still stands true to this
            day with her daughter and our pastor, Reverend Dr. Damaris Torres,
            continuing the legacy.
          </MissionText>
        </Grid>
      </MissionGrid>
      <Option_En />
      <MyQuote container>
        <QuoteText variant="h5">
          “24 And let us consider how we may spur one another on toward love and
          good deeds, 25 not giving up meeting together, as some are in the
          habit of doing, but encouraging one another—and all the more as you
          see the Day approaching.”
          <br />
          -Hebrews 10:24-25
        </QuoteText>
      </MyQuote>
    </div>
  );
}
