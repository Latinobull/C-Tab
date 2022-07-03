import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.accent.main,
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
export default function ClassesEn() {
  return (
    <div>
      <LiveGrid container>
        <Headers>Bible Studies (Virtual)</Headers>
      </LiveGrid>
      <LiveGrid>
        <Text>
          All our Bible studies are currently ran on zoom until further notice
        </Text>
        <BoldText>
          Men's Class - 12pm Sundays <br />
          Led By:
        </BoldText>
        <Text>Pastor Edward Guadalupe, Gaby Polidura, Moyo Cintron</Text>
        <BoldText>Zoom Link:</BoldText>
        <Text>34744550148</Text>
        <BoldText>Password:</BoldText>
        <Text>234</Text>
      </LiveGrid>
    </div>
  );
}
