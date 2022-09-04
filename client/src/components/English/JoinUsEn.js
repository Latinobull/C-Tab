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
import React, { useEffect, useState } from 'react';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.secondary.main,
  margin: '50px 0',
}));
const VirtualGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.secondary.main,
  paddingBottom: 100,
}));
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  padding: '70px 0px',
  fontSize: '80px',
  color: theme.secondary.main,
  backgroundColor: theme.primary.main,
}));
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '25px',
  lineHeight: '60px',
  color: theme.primary.main,
}));
const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '23px',
  lineHeight: '60px',
  color: theme.primary.main,
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
const MyMap = styled('iframe')(({ theme }) => ({
  margin: '0px 50px',
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
  const [map, setMap] = useState('');
  useEffect(() => {
    fetch('api/fetch')
      .then(response => response.json())
      .then(response => setMap(response));
  }, [setMap]);
  return (
    <div>
      <Headers>Live Services</Headers>
      <LiveGrid container direction="column">
        <Grid container direction="row">
          <Grid item md={7}>
            <MyMap
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src={map}
              sx={{
                width: { sm: '200px', md: '1000px' },
                height: { sm: '200px', md: '500px' },
              }}
            />
          </Grid>
          <Grid item md={5}>
            <Text style={{ fontSize: '60px', letterSpacing: '1px' }}>
              <br />
              Join us at our temple in Brooklyn <br />
              <br />
              For live worship services and to hear a message from God.
            </Text>
          </Grid>
        </Grid>
      </LiveGrid>
      <Grid container direction="row">
        <Grid item md={4}>
          <BoldText variant="h6">
            Wednesdays at 8pm: Prayer and Worship
          </BoldText>
        </Grid>
        <Grid item md={4}>
          <BoldText variant="h6">
            Fridays at 8pm: Kids and Teen alternating services
          </BoldText>
        </Grid>
        <Grid item md={4}>
          <BoldText variant="h6">Sundays at 7pm: Evangelical Services</BoldText>
        </Grid>
      </Grid>

      <Headers>Virtual Service</Headers>
      <VirtualGrid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
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
