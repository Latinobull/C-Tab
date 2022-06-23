import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import headImg from '../../img/headShot.jpg';
const MainGrid = styled(Grid)`
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 120px;
`;

const LeaderText = styled(Typography)`
  text-align: center;
  max-width: 550px;
  padding-bottom: 40px;
`;
const DeaconText = styled(Typography)`
  text-align: center;
  max-width: 400px;
  padding-bottom: 40px;
`;
const LeaderImg = styled('img')({});
const mainLeaders = [
  {
    title: 'Pastor',
    name: 'Damaris Torres',
    description:
      'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
  },
  {
    title: 'Pastor',
    name: 'Huey Perez',
    description:
      'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
  },
  {
    title: 'Co-Pastor',
    name: 'Edward Guadalupe',
    description:
      'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
  },
  {
    title: 'Secretary',
    name: 'Annette Guadalupe',
    description:
      'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
  },
  {
    title: 'Treasurer',
    name: 'Yesenia Rodriquez',
    description:
      'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
  },
];
const Decons = [
  'Luis Cruz',
  'Tony Perez',
  'Olga Torres',
  'David Melendez',
  'Manny Cancel',
  'Esperanza Cancel',
  'Alex Rodriquez',
];
const ushers = [
  'Guanchy Lopez',
  'Lucy Martinez',
  'Miguel',
  'Aurora Acevedo',
  'Diana Casanova',
  'Luis Andino',
  'Gregory Brito',
  'Amanda Beniquez',
];
export default function Leaders_En() {
  return (
    <div>
      {console.log(mainLeaders[0].title)}
      <Typography variant="h3" align="center" style={{ padding: '100px 0px' }}>
        Our Leaders
      </Typography>
      {mainLeaders.map((leader, index) => (
        <div>
          {index % 2 === 0 ? (
            <MainGrid container>
              <Grid item>
                <LeaderImg
                  src={headImg}
                  sx={{
                    width: { xs: '300px', md: '500px' },
                    height: { xs: '400px', md: '600px' },
                  }}
                />
              </Grid>
              <Grid item>
                <LeaderText variant="h3">
                  {leader.title}
                  <br /> {leader.name}
                </LeaderText>
                <LeaderText variant="h5">{leader.description}</LeaderText>
              </Grid>
            </MainGrid>
          ) : (
            <MainGrid container direction="row-reverse">
              <Grid item>
                <LeaderImg
                  src={headImg}
                  sx={{
                    width: { xs: '300px', md: '500px' },
                    height: { xs: '400px', md: '600px' },
                  }}
                />
              </Grid>
              <Grid item>
                <LeaderText variant="h3">
                  {leader.title}
                  <br /> {leader.name}
                </LeaderText>
                <LeaderText variant="h5">{leader.description}</LeaderText>
              </Grid>
            </MainGrid>
          )}
        </div>
      ))}
      <Typography variant="h4" align="center" style={{ padding: '50px 0px' }}>
        Decons
      </Typography>
      <Grid container spacing={2} justifyContent="space-evenly">
        {Decons.map(decon => (
          <Grid item>
            <LeaderImg
              src={headImg}
              style={{ width: '380px', height: '400px' }}
            />
            <DeaconText variant="h5">{decon}</DeaconText>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" align="center" style={{ padding: '50px 0px' }}>
        Ushers
      </Typography>
      <Grid container spacing={2} justifyContent="space-evenly">
        {ushers.map(ushers => (
          <Grid item>
            <LeaderImg
              src={headImg}
              style={{ width: '380px', height: '400px' }}
            />
            <DeaconText variant="h5">{ushers}</DeaconText>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
