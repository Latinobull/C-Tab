import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const MyFooter = styled('footer')`
  margin-top: auto;
  background-color: rgb(168, 239, 255);
  padding: 50px;
`;
const FooterText = styled(Typography)`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
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
            <FooterText>
              616 JAMAICA AVENUE
              <br />
              BROOKLYN,NY 11208
              <br />
              (555) 555-5555
            </FooterText>
          </Grid>
          <Grid item lg={2} marginBottom="30px">
            <FooterText variant="h6">Services</FooterText>
            <FooterText>
              Sunday - 7pm
              <br />
              Wednesday - 8pm
              <br />
              Friday - 8pm
            </FooterText>
          </Grid>
          <Grid item lg={2}>
            <FooterText variant="h6">Follow Us</FooterText>

            <a href="#">Facebook</a>
            <FooterText>InsertEmail@gmail.com</FooterText>
          </Grid>
        </Grid>
      </MyFooter>
    </div>
  );
}
