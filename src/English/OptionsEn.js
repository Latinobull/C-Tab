import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import handImg from '../img/hands.jpg';
import { styled } from '@mui/material/styles';

const MainGrid = styled(Grid)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  padding: '100px 0px',
  backgroundColor: theme.secondary.main,
  padding: '250px 0px',
}));

const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
}));
const Img = styled('img')({});
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  color: 'white',
  borderRadius: '8px',
  width: '120px',
  height: '35px',
  fontWeight: 400,
  fontSize: '13px',
  marginTop: '20px',
  fontFamily: theme.typography.h6.fontFamily,
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  color: theme.primary.main,
  textAlign: 'center',
}));
const Header = styled(Typography)(({ theme }) => ({
  color: theme.primary.main,
  fontSize: '80px',
  textAlign: 'center',
}));
export default function Option_En() {
  return (
    <div>
      {/* Join us Online */}
      <MainGrid container>
        <GridItem>
          <Grid>
            <Img src={handImg} sx={{ width: { xs: '300px', md: '500px' } }} />
          </Grid>
          <Grid style={{ width: '500px' }}>
            <Header variant="h3">Ministries</Header>
            <Text variant="h6">
              We have virtual services and bible studies via zoom and facebook.
              We host kids, teens, and adult bible study, view our schedule
              here. We host FB live services every Sunday, Wednesday, and
              Friday. View our virtual services schedule here.
            </Text>
            <Grid container justifyContent={'center'}>
              {' '}
              <MyButton variant="contained" href="/en/our services">
                View More
              </MyButton>
            </Grid>
          </Grid>
        </GridItem>

        {/* Our Ministries */}
        <GridItem>
          <Grid item>
            <Img src={handImg} sx={{ width: { xs: '300px', md: '500px' } }} />{' '}
          </Grid>
          <Grid item style={{ width: '500px' }}>
            <Header variant="h3">Leaders</Header>
            <Text variant="h6">
              Everyone who comes to Christian Tabernacle, governs a special
              talent. We aim to foster and grow those gifts within our
              congregation. Read more about the various ministries we have at
              Christian Tabernacle.
            </Text>
            <Grid container justifyContent={'center'}>
              {' '}
              <MyButton variant="contained" href="/en/ministries">
                View More
              </MyButton>
            </Grid>
          </Grid>
        </GridItem>
        {/* Changing the world */}
        <GridItem>
          <Grid item>
            <Img src={handImg} sx={{ width: { xs: '300px', md: '500px' } }} />{' '}
          </Grid>
          <Grid item style={{ width: '500px' }}>
            <Header variant="h3">Our Beliefs</Header>
            <Text variant="h6">
              Our leadership team bring years of devotion and experience to
              govern our church. Anointed and passionate, our team serves under
              the direction of God and the Holy Spirit. loremk lorem lorem lorem
            </Text>
            <Grid container justifyContent={'center'}>
              <MyButton variant="contained" href="en/Ministries">
                View More
              </MyButton>
            </Grid>
          </Grid>
        </GridItem>
      </MainGrid>
    </div>
  );
}
