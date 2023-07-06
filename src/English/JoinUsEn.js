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
import LiveServices from '../components/LiveServices';
import PraiseHands from '../img/PraiseHands.png';
import Classes from '../components/Classes';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '25px',
  color: theme.primary.main,
  paddingBottom: '50px',
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
  margin: '200px 0px',
  backgroundColor: theme.primary.main,
  padding: '200px',
  maxWidth: '88%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '200px auto',
  padding: '100px',
  borderRadius: '40px',
}));
const FAQText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '45px',
  color: theme.secondary.main,
  paddingBottom: 40,
  margin: 'auto',
}));
const MyAccordian = styled(Accordion)(({ theme }) => ({
  width: '800px',
  boxShadow: 'none',
}));

const faqContent = [
  {
    title: 'What should I do when I arrive',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What should I wear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What about my kids',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What do we believe in',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
export default function JoinUsEn() {
  return (
    <div>
      <Header text={'Welcome Home'} image={joinUsImage} />
      <LiveServices />
      <UnableGrid container direction={'column'}>
        <Typography sx={{ fontSize: '100px', textAlign: 'center' }}>
          Unable to make it?
        </Typography>
        <Typography sx={{ fontSize: '45px', textAlign: 'center' }} variant="h6">
          You can stil catch our Facebook Live!
        </Typography>
        <LightButton>Click Here</LightButton>
      </UnableGrid>
      <Classes />
     
      <FAQGrid>
        <Text
          sx={{
            color: theme => theme.secondary.main,
            fontSize: '120px',
          }}
        >
          What to expect
        </Text>
        {faqContent.map((content, idx) => (
          <Grid container justifyContent="center" key={idx}>
            <MyAccordian>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{
                  backgroundColor: theme => theme.primary.main,
                  textAlign: 'center',
                }}
              >
                <FAQText variant="h6">{content.title}</FAQText>
              </AccordionSummary>
              <AccordionDetails>
                <Text variant="h6">{content.desc}</Text>
              </AccordionDetails>
            </MyAccordian>
          </Grid>
        ))}
      </FAQGrid>
    </div>
  );
}
