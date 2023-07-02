import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { styled } from '@mui/material/styles';

const MainGrid = styled(Grid)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  padding: '100px 0px',
  backgroundColor: 'white',
  padding: '250px 0px',
}));

const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
}));
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  color: 'white',
  borderRadius: '8px',
  width: '150px',
  height: '50px',
  fontWeight: 400,
  fontSize: '16px',
  marginTop: '20px',
  fontFamily: theme.typography.h6.fontFamily,
  '&:hover': {
    backgroundColor: theme.accent.main,
    color: theme.primary.main,
  },
}));
const Header = styled(Typography)(({ theme }) => ({
  color: theme.primary.main,
  fontSize: '100px',
  textAlign: 'center',
  marginBottom: '40px',
}));
export default function Option_En() {
  const pages = ['Leaders', 'Ministries', 'Beliefs'];
  return (
    <div>
      {/* Join us Online */}
      <MainGrid container>
        {pages.map(page => (
          <GridItem>
            <Grid style={{ width: '500px' }}>
              <Header variant="h3">
                Our <br />
                {page}
              </Header>

              <Grid container justifyContent={'center'}>
                <MyButton variant="contained" href="/en/our services">
                  View More
                </MyButton>
              </Grid>
            </Grid>
          </GridItem>
        ))}
      </MainGrid>
    </div>
  );
}
