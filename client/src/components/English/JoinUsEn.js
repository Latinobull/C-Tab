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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.accent.main,
}));
const VirtualGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.secondary.main,
  paddingBottom: 100,
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
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.accent.main,
  color: 'black',
  borderRadius: '1px',
  width: '180px',
  height: '60px',
  textAlign: 'center',
}));
const FAQGrid = styled(Grid)(({ theme }) => ({
  margin: '100px 0px',
}));
const MyAccordian = styled(Accordion)(({ theme }) => ({
  width: '800px',
}));
const faqContent = [
  {
    title: 'What should I wear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What should I wear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What should I wear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
export default function JoinUsEn() {
  let test = document.querySelector('.Button');
  console.log(test);
  return (
    <div>
      <LiveGrid container direction="column">
        <Headers>Live Services</Headers>
        <Text>
          Join us at our temple in Brooklyn on <br />
          616 Jamaica Avenue,Brooklyn, NY 11208 <br />
          For Live Worship services and to hear a message from God.
          <br />
        </Text>
        <BoldText>
          Services:
          <br />
          Sundays at 7pm: Evangelical Services
          <br />
          Wednesdays at 8pm: Prayer and Worship <br />
          Fridays at 8pm: Kids and Teen alternating services
        </BoldText>
      </LiveGrid>
      <VirtualGrid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Headers>Virtual Service</Headers>
          <Text>
            Join us via Facebook live to view all our services. <br />
          </Text>
          <BoldText>
            We're live on: <br />
            Sundays at 7pm
            <br />
            Wednesdays at 8pm
            <br />
            Fridays at 8pm
            <br />
          </BoldText>
          <Box textAlign="center">
            <MyButton
              variant="contained"
              href="https://www.facebook.com/christiantabernacle.church.7"
              target="_blank"
            >
              Watch
            </MyButton>
          </Box>
        </Grid>
      </VirtualGrid>

      <FAQGrid>
        <Headers>FAQ</Headers>
        {faqContent.map(content => (
          <Grid container justifyContent="center">
            <MyAccordian>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <BoldText>{content.title}</BoldText>
              </AccordionSummary>
              <AccordionDetails>
                <Text>{content.desc}</Text>
              </AccordionDetails>
            </MyAccordian>
          </Grid>
        ))}
      </FAQGrid>
    </div>
  );
}
