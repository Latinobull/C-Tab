import { Grid, styled, Typography, Button, Box } from '@mui/material';
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
export default function JoinUsEn() {
  return (
    <div>
      <LiveGrid container direction="column">
        <Headers>Live Services</Headers>
        <Text>
          Join us at our temple in Brooklyn on <br />
          616 Jamaica Avenue,Brooklyn, NY 11208 <br />
          For Live Worship services and to hear a message from God.
          <br />
          <BoldText>
            Services:
            <br />
            Sundays at 7pm: Evangelical Services
            <br />
            Wednesdays at 8pm - Prayer and Worship <br />
            Fridays at 8pm - Kids and Teen alternating services
          </BoldText>
        </Text>
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
            <BoldText>We're live on:</BoldText>
            Sundays at 7pm
            <br />
            Wednesdays at 8pm
            <br />
            Fridays at 8pm
            <br />
          </Text>
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
    </div>
  );
}
