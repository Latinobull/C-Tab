import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const MyFooter = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.primary.main,
  padding: '50px',
}));
const FooterText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
}));
export default function Footer() {
  return (
    <div>
      <MyFooter>
        <Grid container justifyContent="space-evenly" textAlign="center">
          <Grid item marginBottom="30px">
            <FooterText variant="h6">IGLESIA TABERNACULO CRISTIANO</FooterText>
            <FooterText>
              616 JAMAICA AVENUE
              <br />
              BROOKLYN,NY 11208
            </FooterText>
          </Grid>
          <Grid item lg={2} marginBottom="30px">
            <FooterText variant="h6">Servicios</FooterText>
            <FooterText>
              Domingo - 7pm
              <br />
              Miercoles - 8pm
              <br />
              Viernes - 8pm
            </FooterText>
          </Grid>
          <Grid item lg={2}>
            <FooterText variant="h6">Síganos</FooterText>

            <div>Facebook</div>
            <FooterText>InsertEmail@gmail.com</FooterText>
          </Grid>
        </Grid>
      </MyFooter>
    </div>
  );
}
