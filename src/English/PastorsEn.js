import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import headImg from '../img/headShot.jpg';
import LeadersEn from './LeadersEn';
import LeaderHeader from '../img/headers/LeaderHeader.png';
import PastorImg from '../img/PastorsImg.png';
import CoPastorImg from '../img/CoPastorImg.png';
import Header from '../components/Header';

const HeaderHeadline = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '110px',
  width: '1600px',
}));

const HeaderCaption = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '50px',
}));
const MainGrid = styled(Grid)`
  padding: 120px 0px;
  background-color: white;
`;

const TextContainer = styled(Typography)(({ theme }) => ({
  width: '800px',
}));
const PastorHeader = styled(Typography)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '100px',
  color: theme.primary.main,
  padding: '0px 0',
}));

const SubHeader = styled(Typography)(({ theme }) => ({
  color: theme.primary.main,
  fontSize: '40px',
  fontWeight: '700',
}));

const Text = styled(Typography)(({ theme }) => ({
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
    header: 'Lead Pastors',
    person: 'Rev. Damaris & Frank Perez ',
    content:
      'He is our father, the great creator of the universe. This is where we wll include what we believe about him and add some bible verse to prove what we believe in him. These are just filler words. All of this will have words in them to fill up the paragraph. ',
    image: PastorImg,
  },
  {
    header: 'Assistant Pastor',
    person: 'Edward Guadalupe',
    content:
      'It all begins with an idea. Maybe you want to launch a business.Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, theway you tell your story online can make all the difference.',
    image: CoPastorImg,
  },
];
export default function PastorsEn() {
  return (
    <div>
      <Header text={``} image={LeaderHeader}>
        <HeaderHeadline variant="h1">
          "Without wise leadership, a nation falls; there is safety in having
          many advisers"
        </HeaderHeadline>
        <HeaderCaption variant="h6">Proverbs 11:14</HeaderCaption>
      </Header>

      <MainGrid>
        {pastors.map((pastor, idx) => (
          <Grid
            container
            justifyContent={'space-around'}
            flexWrap={'nowrap'}
            alignItems={'center'}
            key={idx}
          >
            <LeaderImg
              src={pastor.image}
              sx={
                idx === 0
                  ? {
                      width: { xs: '300px', md: '900px' },
                      height: { xs: '400px', md: '870px' },
                    }
                  : {
                      width: { xs: '300px', md: '800px' },
                      height: { xs: '400px', md: '770px' },
                    }
              }
            ></LeaderImg>
            <TextContainer>
              <PastorHeader variant="h1">{pastor.header}</PastorHeader>
              <SubHeader variant="h6"> {pastor.person}</SubHeader>
              <Text variant="h6">{pastor.content}</Text>
            </TextContainer>
          </Grid>
        ))}
      </MainGrid>
      <LeadersEn />
    </div>
  );
}
