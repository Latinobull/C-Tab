import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import churchImg from '../../img/churchBuilding.jpg';
import Option_En from './Options_En';
import backgroundImg from '../../videos/MainVideo.mp4';

const MainGrid = styled(Grid)(({ theme }) => ({
  height: '90vh',
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
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '120px',
  color: theme.primary.main,
}));
const OpenText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '100px',
  color: theme.secondary.main,
}));
export default function Main_En() {
  return (
    <div>
      <MyVideo autoPlay loop muted id="video">
        <source src={backgroundImg} type="video/mp4" />
      </MyVideo>
      <MainGrid container alignItems="center">
        <Grid item>
          <OpenText>A house on fire</OpenText>
          <MyButton
            variant="contained"
            sx={{ width: '250px', height: '50px', fontSize: '20px' }}
            href="/en/ourservices"
          >
            Join us
          </MyButton>
        </Grid>
      </MainGrid>
      <MissionGrid container direction="row" alignItems="center">
        <Grid item>
          <Headers>Our Mission</Headers>
          <MissionText variant="h6">
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
          “Then have them make a sanctuary for me, and I will dwell among them."
          <QuoteText2 variant="h6">Exodus 25:8</QuoteText2>
        </QuoteText>
      </MyQuote>
    </div>
  );
}
