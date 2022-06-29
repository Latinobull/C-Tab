import { Grid, styled, Typography } from '@mui/material';
import React from 'react';

const MainGrid = styled(Grid)`
  min-height: 40vh;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const MainStatement = styled(Typography)`
  color: black;
  font-size: 50px;
  max-width: 700px;
  text-align: center;
`;
const MissionGrid = styled(Grid)`
  justify-content: space-evenly;
  margin: 100px 0px;
`;
const MissionText = styled(Typography)`
  color: white;
`;
const StatementImg = styled('img')({});
const StatementText = styled(Typography)`
  font-size: 30px;
  width: 600px;
`;
const BeliefText = styled(Typography)`
  text-align: center;
`;
export default function AboutEn() {
  return (
    <div>
      {/* <MainGrid container alignItems="center">
        <MainStatement>
          Since 1984, our vision to serve the Lord and help the lost has been
          established.
        </MainStatement>
      </MainGrid> */}
      <MissionGrid container>
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
            The Founder
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StatementText>
        </Grid>
      </MissionGrid>
      <BeliefText variant="h3">Our Beliefs</BeliefText>
    </div>
  );
}
