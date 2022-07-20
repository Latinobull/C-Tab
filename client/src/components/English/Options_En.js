import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import laptopImg from '../../img/laptop.jpg';
import kidImg from '../../img/kids.jpg';
import handImg from '../../img/hands.jpg';
import { styled } from '@mui/material/styles';

const MainGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  paddingTop: '100px',
}));
const Img = styled('img')({});
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  color: 'white',
  borderRadius: '1px',
  width: '180px',
  height: '60px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: theme.primary.second,
  },
}));
export default function Option_En() {
  return (
    <div>
      {/* Join us Online */}
      <MainGrid container>
        <Grid item>
          <Img src={laptopImg} sx={{ width: { xs: '300px', md: '600px' } }} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Typography variant="h3">Our Founder</Typography>
          <Typography variant="h6">
            We have virtual services and bible studies via zoom and facebook. We
            host kids, teens, and adult bible study, view our schedule here. We
            host FB live services every Sunday, Wednesday, and Friday. View our
            virtual services schedule here.
          </Typography>
          <MyButton variant="contained" href="/en/our services">
            Learn More
          </MyButton>
        </Grid>
      </MainGrid>
      {/* Our Ministries */}
      <MainGrid container direction="row-reverse">
        <Grid item>
          <Img src={kidImg} sx={{ width: { xs: '300px', md: '600px' } }} />{' '}
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Typography variant="h3">Our Ministries</Typography>
          <Typography variant="h6">
            Everyone who comes to Christian Tabernacle, governs a special
            talent. We aim to foster and grow those gifts within our
            congregation. Read more about the various ministries we have at
            Christian Tabernacle.
          </Typography>
          <MyButton variant="contained" href="/en/ministries">
            Ministries
          </MyButton>
        </Grid>
      </MainGrid>
      {/* Changing the world */}
      <MainGrid container>
        <Grid item>
          <Img src={handImg} sx={{ width: { xs: '300px', md: '600px' } }} />{' '}
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Typography variant="h3">
            Changing the world is possible. We’ve done it before.
          </Typography>
          <Typography variant="h6">
            Our leadership team bring years of devotion and experience to govern
            our church. Anointed and passionate, our team serves under the
            direction of God and the Holy Spirit.
          </Typography>
          <MyButton variant="contained" href="en/Ministries">
            Leadership
          </MyButton>
        </Grid>
      </MainGrid>
    </div>
  );
}
