import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import headImg from '../img/headShot.jpg';
import LeadersEn from './LeadersEn';
import Header from '../components/Header';
const MainGrid = styled(Grid)`
  padding: 120px 0px;
  background-color: white;
`;
const SubHeaders = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '50px',
  color: theme.primary.main,
  padding: '80px 0',
}));

const Text = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '300',
  fontSize: '30px',
  maxWidth: '1000px',
  paddingBottom: '30px',
  color: theme.primary.main,
}));
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
      <Header text={'Meet the Pastors'}></Header>

      <MainGrid container>
        {pastors.map(pastor => (
          <Grid container item md={6} justifyContent="center">
            <LeaderImg
              src={pastor.image}
              sx={{
                width: { xs: '300px', md: '500px' },
                height: { xs: '400px', md: '500px' },
              }}
            ></LeaderImg>
            <SubHeaders>{pastor.header}</SubHeaders>
            <Text variant="h6">{pastor.content}</Text>
          </Grid>
        ))}
      </MainGrid>
      <LeadersEn />
    </div>
  );
}
