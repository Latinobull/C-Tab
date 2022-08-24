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
  padding: '100px 0px',
  backgroundColor: theme.primary.main,
}));
const Img = styled('img')({});
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.secondary.main,
  color: theme.primary.main,
  borderRadius: '1px',
  width: '180px',
  height: '60px',
  fontWeight: 400,
  fontSize: '20px',
  marginTop: '20px',
  fontFamily: theme.typography.h6.fontFamily,
  '&:hover': {
    backgroundColor: theme.secondary.main,
    color: 'black',
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  color: theme.secondary.main,
}));
const Header = styled(Typography)(({ theme }) => ({
  color: theme.secondary.main,
  fontSize: 105,
}));
export default function Option_En() {
  return (
    <div>
      {/* Join us Online */}
      {/* <MainGrid container>
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
      </MainGrid> */}
      {/* Our Ministries */}
      <MainGrid container direction="row-reverse">
        <Grid item>
          <Img src={kidImg} sx={{ width: { xs: '300px', md: '600px' } }} />{' '}
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Header variant="h3">Ministries</Header>
          <Text variant="h6">
            Everyone who comes to Christian Tabernacle, governs a special
            talent. We aim to foster and grow those gifts within our
            congregation. Read more about the various ministries we have at
            Christian Tabernacle.
          </Text>
          <MyButton variant="contained" href="/en/ministries">
            View More
          </MyButton>
        </Grid>
      </MainGrid>
      {/* Changing the world */}
      <MainGrid container>
        <Grid item>
          <Img src={handImg} sx={{ width: { xs: '300px', md: '600px' } }} />{' '}
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Header variant="h3">Leaders</Header>
          <Text variant="h6">
            Our leadership team bring years of devotion and experience to govern
            our church. Anointed and passionate, our team serves under the
            direction of God and the Holy Spirit.
          </Text>
          <MyButton variant="contained" href="en/Ministries">
            View More
          </MyButton>
        </Grid>
      </MainGrid>
    </div>
  );
}
