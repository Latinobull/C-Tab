import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const MyFooter = styled('footer')`
  margin-top: auto;
  background-color: rgb(168, 19, 0);
  padding: 50px;
`;
const FooterText = styled(Typography)`
  color: white;
`;
export default function Footer() {
  return (
    <div>
      <MyFooter>
        <Grid container justifyContent="space-evenly" textAlign="center">
          <Grid item marginBottom="30px">
            <FooterText variant="h6">
              CHRISTIAN TABERNACLE PENTECOSTAL CHURCH BROOKLYN
            </FooterText>
            <FooterText variant="h6">IGLESIA TABERNACULO CRISTIANO</FooterText>
            <FooterText>
              616 JAMAICA AVENUE
              <br />
              BROOKLYN,NY 11208
              <br />
              (555) 555-5555
            </FooterText>
          </Grid>
          <Grid item lg={2} marginBottom="30px">
            <FooterText variant="h6">Services/Servicios</FooterText>
            <FooterText>
              Sunday / Domingo - 7pm
              <br />
              Wednesday / Miercoles - 8pm
              <br />
              Friday / Viernes - 8pm
            </FooterText>
          </Grid>
          <Grid item lg={2}>
            <FooterText variant="h6">Follow Us</FooterText>

            <a href="#" style={{ color: 'white' }}>
              Facebook
            </a>
            <FooterText>InsertEmail@gmail.com</FooterText>
          </Grid>
        </Grid>
      </MyFooter>
    </div>
  );
}
