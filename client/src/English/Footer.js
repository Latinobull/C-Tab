import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import churchLogo from '../img/churchLogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
const MyFooter = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.secondary.main,
  padding: '50px',
}));
const FooterText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: theme.primary.main,
}));
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.primary.main,
}));
const Logo = styled('img')(({ theme }) => ({
  color: theme.primary.main,
  width: '150px',
  height: '100px',
}));
export default function Footer() {
  return (
    <div>
      <MyFooter>
        <Logo src={churchLogo} />
        <Grid container justifyContent="space-between" textAlign="center">
          <Grid item marginBottom="30px">
            <FooterText variant="h5">CHRISTIAN TABERNACLE CHURCH</FooterText>
            <FooterText variant="h6">
              616 JAMAICA AVENUE
              <br />
              BROOKLYN,NY 11208
              <br />
              (555) 555-5555
            </FooterText>
          </Grid>
          <Grid item lg={2} xs={12}>
            <FooterText variant="h5">Follow Us</FooterText>

            <FooterLink
              href="https://www.facebook.com/christiantabernacle.church.7"
              target="_blank"
              underline="none"
            >
              <FacebookIcon />
            </FooterLink>
            <FooterText>InsertEmail@gmail.com</FooterText>
          </Grid>
        </Grid>
      </MyFooter>
    </div>
  );
}
