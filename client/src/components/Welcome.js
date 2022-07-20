import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import backgroundImg from '../videos/welcomeTest.mp4';

const MyContent = styled(Grid)`
  text-align: center;
  padding: 100px 50px 50px 50px;
  color: white;
`;

const MyLink = styled(Link)`
  color: white;
  font-size: 20px;
`;
const MyVideo = styled('video')`
  position: fixed;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
`;

export default function Welcome() {
  return (
    <div>
      <MyVideo autoPlay loop muted id="video">
        <source src={backgroundImg} type="video/mp4" />
      </MyVideo>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <MyContent sx={{ minWidth: { xs: 'none', md: '1300px' } }}>
          <Typography variant="h2">Welcome to Cristian Tabernacle</Typography>

          <Button size="large">
            <MyLink href="/en" underline="hover">
              English
            </MyLink>
          </Button>
          <br />
        </MyContent>
        <MyContent sx={{ minWidth: { xs: 'none', md: '1300px' } }}>
          <Typography variant="h2">
            Beinvenidos a Tabernaculo Cristiano
          </Typography>
          <Button size="large">
            <MyLink href="/sp" underline="hover">
              Spanish
            </MyLink>
          </Button>
        </MyContent>
      </Grid>
    </div>
  );
}
