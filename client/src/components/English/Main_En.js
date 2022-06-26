import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import worshipImage from '../../img/worship.jpg';
import crossImg from '../../img/cross.jpg';
import Option_En from './Options_En';

const MainGrid = styled(Grid)`
  background-image: url(${worshipImage});
  background-size: cover;
  min-height: 100vh;
`;
const MainText = styled('div')`
  color: white;
  padding-left: 200px;
  text-align: center;
`;
const MyButton = styled(Button)`
  background-color: white;
  color: rgb(168, 19, 0);
  padding: 10px 25px;
  border-radius: 1px;
`;
const MissionGrid = styled(Grid)`
  background-color: rgb(168, 19, 0);
  color: white;
  justify-content: center;
  font-size: 50px;
  padding: 50px 0px;
  margin-bottom: 10px;
`;
const MissionText = styled(Typography)`
  max-width: 700px;
  font-size: 30px;
  text-align: center;
`;
const MyQuote = styled(Grid)`
  background-image: url(${crossImg});
  max-width: 99vw;
  min-height: 50vh;
  background-size: cover;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
`;
const QuoteText = styled(Typography)`
  color: white;
  max-width: 600px;
  background-color: rgb(168, 19, 0, 0.5);
  border-radius: 12px;
`;
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
