import { Grid, styled, Typography } from '@mui/material';
import laptopImg from '../../img/laptop.jpg';
import React from 'react';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.accent.main,
  alignItems: 'center',
  padding: '70px 0px',
}));
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  margin: '30px 0px',
  fontSize: '50px',
}));
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '25px',
  lineHeight: '60px',
}));
const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '23px',
  lineHeight: '60px',
}));
const Img = styled('img')({});
export default function ClassesEn() {
  return (
    <div>
      <Headers>Bible Studies (Virtual)</Headers>
      <Text>
        All our Bible studies are currently ran on zoom until further notice
      </Text>
      <BoldText>Men's Class - 12pm Sundays </BoldText>
      <LiveGrid container>
        <Grid item>
          <Img src={laptopImg} sx={{ width: { xs: '300px', md: '600px' } }} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <BoldText>Led by:</BoldText>
          <Text>Assistant Pastor Edward Guadalupe and Gaby Polidura</Text>
          <BoldText>Zoom Link:</BoldText>
          <Text>34744550148</Text>
          <BoldText>Password:</BoldText>
          <Text>234</Text>
        </Grid>
      </LiveGrid>
      <BoldText>Women's Class - 12pm Sundays </BoldText>
      <LiveGrid container direction="row-reverse">
        <Grid item>
          <Img src={laptopImg} sx={{ width: { xs: '300px', md: '600px' } }} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <BoldText>Led by:</BoldText>
          <Text>Pastor Damaris Torres and Annette Guadalupe</Text>
          <BoldText>Zoom Link:</BoldText>
          <Text>34744550148</Text>
          <BoldText>Password:</BoldText>
          <Text>234</Text>
        </Grid>
      </LiveGrid>
      <BoldText>Youth Class - 12pm Sundays </BoldText>
      <LiveGrid container>
        <Grid item>
          <Img src={laptopImg} sx={{ width: { xs: '300px', md: '600px' } }} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <BoldText>Led by:</BoldText>
          <Text>Pastor Huey Perez and Michael Ruiz</Text>
          <BoldText>Zoom Link:</BoldText>
          <Text>34744550148</Text>
          <BoldText>Password:</BoldText>
          <Text>234</Text>
        </Grid>
      </LiveGrid>
    </div>
  );
}
