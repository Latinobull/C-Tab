import {
  Grid,
  styled,
  Typography,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import Header from '../components/Header';
import joinUsImage from '../img/JoinUsImage.png';
import WorshipUsImage from '../img/WorshipImage.png';
import LiveServices from '../components/LiveServices';
import PraiseHands from '../img/PraiseHands.png';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.primary.main,
}));

const WorhsipContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.secondary.main,
  width: '100%',
  padding: '200px 40px',
}));
const WorshipHeader = styled(Typography)(({ theme }) => ({
  fontSize: '150px',
  color: theme.primary.main,
  fontWeight: 700,
}));
const WorshipText = styled(Typography)(({ theme }) => ({
  fontSize: '45px',
  color: theme.primary.main,
  fontWeight: 500,
}));

const WorshipImage = styled('img')(({ theme }) => ({
  height: '640px',
  width: '1000px',
}));
const UnableGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  backgroundImage: `url(${PraiseHands})`,
  backgroundSize: 'cover',
  color: 'white',
  maxWidth: '100%',
  margin: '0 auto 0px',
  padding: '100px',
  height: '700px',
}));
const LightButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '1px',
  width: '180px',
  height: '50px',
  textAlign: 'center',
  borderRadius: '10px',
  marginTop: '30px',
  '&:hover': {
    backgroundColor: '#ddd',
  },
}));

const FAQGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.secondary.main,
  alignItems: 'flex-start',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  padding: '200px 0',
}));
const FAQText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '64px',
  color: theme.primary.main,
  margin: 'auto',
}));
const MyAccordian = styled(Accordion)(({ theme }) => ({
  width: '1200px',
  boxShadow: 'none',
  borderBottom: `solid 2px ${theme.primary.main}`,
  marginBottom: '0',
}));

const faqContent = [
  {
    title: 'Is there a place for my kids?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Who will greet me?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Are the services bilingual?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Are there a lot of young people?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
export default function JoinUsEn() {
  return (
    <div>
      <Header text={'Welcome Home'} image={joinUsImage} />
      <WorhsipContainer
        container
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="nowrap"
      >
        <div>
          <WorshipHeader>Worship With Us</WorshipHeader>
          <WorshipText variant="h6">
            We welcome you & we'd love to have you!
          </WorshipText>
        </div>

        <WorshipImage src={WorshipUsImage} alt="worship" />
      </WorhsipContainer>
      <LiveServices />

      {/* <Classes /> */}

      <FAQGrid container>
        <div>
          <Text
            sx={{
              color: theme => theme.primary.main,
              fontSize: '120px',
            }}
          >
            FAQ
          </Text>
          <Text
            sx={{
              color: theme => theme.primary.main,
              fontSize: '35px',
            }}
            variant="h6"
          >
            We have the answers!
          </Text>
        </div>
        <div>
          {faqContent.map((content, idx) => (
            <Grid container justifyContent="center" key={idx}>
              <MyAccordian>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '50px',
                        fontSize: '50px',
                      }}
                    />
                  }
                  sx={{
                    backgroundColor: theme => theme.secondary.main,
                    textAlign: 'center',
                    paddingBottom: '0',
                  }}
                >
                  <FAQText sx={{ paddingTop: idx !== 0 ? '40px' : '0px' }}>
                    {content.title}
                  </FAQText>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ backgroundColor: theme => theme.secondary.main }}
                >
                  <Text variant="h6">{content.desc}</Text>
                </AccordionDetails>
              </MyAccordian>
            </Grid>
          ))}
        </div>
      </FAQGrid>
      <UnableGrid container direction={'column'}>
        <Typography sx={{ fontSize: '100px', textAlign: 'center' }}>
          Can't make it?
        </Typography>
        <Typography sx={{ fontSize: '45px', textAlign: 'center' }} variant="h6">
          You can stil catch our Facebook Live!
        </Typography>
        <LightButton>Click Here</LightButton>
      </UnableGrid>
    </div>
  );
}
