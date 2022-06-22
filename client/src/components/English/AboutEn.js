import { Grid, styled, Typography } from '@mui/material';
import churchBuilding from '../../img/churchBuilding.jpg';
import React from 'react';

const MainGrid = styled(Grid)`
  min-height: 40vh;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const MainStatement = styled(Typography)`
  color: black;
  padding-left: 250px;
  font-size: 50px;
  max-width: 700px;
`;
const MissionGrid = styled(Grid)`
  background-color: lightblue;
  min-height: 40vh;
  justify-content: space-evenly;
`;
const MissionText = styled(Typography)`
  color: white;
`;
const StatementImg = styled('img')({});
const StatementText = styled(Typography)`
  color: white;
  font-size: 40px;
  width: 600px;
`;
export default function AboutEn() {
  return (
    <div>
      <MainGrid container alignItems="center">
        <MainStatement>
          Since 1984, our vision to serve the Lord and help the lost has been
          established.
        </MainStatement>
      </MainGrid>
      <MissionGrid container justifyContent="center" alignContent="center">
        <Grid item>
          <div
            style={{
              'background-color': 'grey',
              width: '500px',
              height: '400px',
            }}
          >
            Image of Josephina
          </div>
        </Grid>
        <Grid item>
          <StatementText>
            Our Mission
            <br /> We believe that we are not just a church but a home and a
            hospital for the broken. Everything we do is guided by the power of
            the Holy Spirit and the love that Christ has shown us.
          </StatementText>
        </Grid>

        <MissionText display="block"></MissionText>
      </MissionGrid>
    </div>
  );
}
