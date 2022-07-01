import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import worshipImage from '../../img/worship.jpg';
import crossImg from '../../img/cross.jpg';
import Option_En from './Options_En';

const MainGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${worshipImage})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
}));
const MainText = styled('div')(({ theme }) => ({
  paddingLeft: '200px',
  textAlign: 'center',
  color: 'white',
}));
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.accent.main,
  color: 'black',
  padding: '10px 25px',
  borderRadius: '1px',
}));
const MissionGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  justifyContent: 'center',
  fontSize: '50px',
  padding: '50px 0px',
  marginBottom: '10px',
}));
const MissionText = styled(Typography)(({ theme }) => ({
  maxWidth: '700px',
  fontSize: '30px',
  textAlign: 'center',
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
export default function Main_En() {
  return (
    <div>
      <MainGrid container direction="row" justify="center" alignItems="center">
        <MainText>
          <Typography style={{ fontSize: '32px' }}>A house on fire,</Typography>
          <Typography style={{ fontSize: '32px' }}>
            led by the Holy Spirit
          </Typography>
          <MyButton variant="contained">Learn More</MyButton>
        </MainText>
      </MainGrid>
      <MissionGrid container justify="" direction="row" alignItems="center">
        <Grid item>
          <MissionText>
            'We are not just a church, but a home and a hospital for the
            broken.'
          </MissionText>
        </Grid>
        <br />
        <Grid item>
          <MissionText>
            Our mission
            <br />
            We believe that we are not just a church but a home and a hospital
            for the broken. Everything we do is guided by the power of the Holy
            Spirit and the love that Christ has shown us
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
