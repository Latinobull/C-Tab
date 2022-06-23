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
const LeaderImg = styled('img')({});
export default function Leaders_En() {
  return (
    <div>
      <Typography variant="h3" align="center" style={{ padding: '100px 0px' }}>
        Our Leaders
      </Typography>
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
          <LeaderText variant="h3">Pastor Damaris Torres</LeaderText>
          <LeaderText variant="h5">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.{' '}
          </LeaderText>
        </Grid>
      </MainGrid>
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
          <LeaderText variant="h3">Pastor Huey Perez</LeaderText>
          <LeaderText variant="h5">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.{' '}
          </LeaderText>
        </Grid>
      </MainGrid>
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
            Co-Pastor
            <br /> Edward Guadalupe
          </LeaderText>
          <LeaderText variant="h5">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.{' '}
          </LeaderText>
        </Grid>
      </MainGrid>
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
            Secretary
            <br /> Annette Guadalupe
          </LeaderText>
          <LeaderText variant="h5">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.{' '}
          </LeaderText>
        </Grid>
      </MainGrid>
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
            Treasurer
            <br /> Yesenia Rodriquez
          </LeaderText>
          <LeaderText variant="h5">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.{' '}
          </LeaderText>
        </Grid>
      </MainGrid>
      <Typography variant="h4" align="center" style={{ padding: '100px 0px' }}>
        Decons
      </Typography>
    </div>
  );
}
