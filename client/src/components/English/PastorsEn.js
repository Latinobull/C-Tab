import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import headImg from '../../img/headShot.jpg';
const MainGrid = styled(Grid)`
  padding-bottom: 120px;
`;
const Headers = styled(Typography)`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 50px;
`;

const Text = styled(Typography)`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 30px;
  max-width: 1400px;
  padding-bottom: 30px;
`;
const LeaderImg = styled('img')`
  padding-bottom: 25px;
`;

const pastors = [
  {
    header: 'Pastor Damaris and Huey Perez',
    content:
      'It all begins with an idea. Maybe you want to launch a business.Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, theway you tell your story online can make all the difference.',
    image: headImg,
  },
  {
    header: 'Assistant Pastor Edward and Secretary Annette Guadalupe',
    content:
      'It all begins with an idea. Maybe you want to launch a business.Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, theway you tell your story online can make all the difference.',
    image: headImg,
  },
];
export default function PastorsEn() {
  return (
    <div>
      <Headers>Meet the Leaders</Headers>
      {pastors.map(pastor => (
        <MainGrid container>
          <Grid container item md={12} justifyContent="center">
            <LeaderImg
              src={pastor.image}
              sx={{
                width: { xs: '300px', md: '400px' },
                height: { xs: '400px', md: '500px' },
              }}
            ></LeaderImg>
          </Grid>
          <Grid container item md={12} justifyContent="center">
            <Headers>{pastor.header}</Headers>
          </Grid>
          <Grid container item md={12} justifyContent="center">
            <Text>{pastor.content}</Text>
          </Grid>
        </MainGrid>
      ))}
    </div>
  );
}
