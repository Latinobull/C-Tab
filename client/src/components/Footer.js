import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
const MyFooter = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.primary.main,
  padding: '50px',
}));
const FooterText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: theme.secondary.main,
}));
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
          <Grid item xs={12} lg={2} marginBottom="30px">
            <FooterText variant="h6">Services</FooterText>
            <FooterText>
              Sunday - 7pm
              <br />
              Wednesday - 8pm
              <br />
              Friday - 8pm
            </FooterText>
          </Grid>
          <Grid item lg={2} xs={12}>
            <FooterText variant="h6">Follow Us</FooterText>

            <Link
              href="https://www.facebook.com/christiantabernacle.church.7"
              target="_blank"
              underline="none"
              sx={{ color: 'white' }}
            >
              Facebook
            </Link>
            <FooterText>InsertEmail@gmail.com</FooterText>
          </Grid>
        </Grid>
      </MyFooter>
    </div>
  );
}
