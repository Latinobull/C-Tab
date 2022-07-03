import { Grid, styled, Typography } from '@mui/material';
import React from 'react';


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
    </div>
  );
}
