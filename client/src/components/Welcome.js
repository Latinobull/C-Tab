import React from 'react';
import worshipImage from '../img/worship.jpg';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const MyBody = styled('div')`
  background-image: url(${worshipImage});
  background-size: cover;
`;

const MyContent = styled(Grid)`
  background-color: rgb(255, 255, 255, 0.4);
  text-align: center;
  padding: 100px 50px 50px 50px;
`;

const MyLink = styled(Link)`
  color: black;
  font-size: 20px;
`;

export default function Welcome() {
  return (
    <MyBody>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <MyContent>
          <Typography variant="h2">Welcome to Cristian Tabernacle</Typography>

          <Typography variant="h3">
            A house on fire, led by the Holy Spirit
          </Typography>
          <Typography>Join Us in English</Typography>
          <Button size="large">
            <MyLink href="/en" underline="hover">
              English
            </MyLink>
          </Button>
          <br />
        </MyContent>
        <MyContent>
          <Typography variant="h2">
            Beinvenidos a Tabernaculo Cristiano
          </Typography>
          <Typography variant="h3">
            Una casa en llamas, dirigida por el espíritu santo
          </Typography>
          <Typography>Unete en Espanol</Typography>
          <Button size="large">
            <MyLink href="/sp" underline="hover">
              Spanish
            </MyLink>
          </Button>
        </MyContent>
      </Grid>
    </MyBody>
  );
}
