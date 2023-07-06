import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Twitter } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';
const MyFooter = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.secondary.main,
  padding: '50px',
}));
const FooterGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
}));
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.primary.main,
  textDecorationColor: theme.secondary.main,
  marginLeft: '50px',
  marginBottom: '30px',
}));
export default function Footer() {
  const allLinks = [
    'Home',
    'Experience',
    'News',
    'About Us',
    'Jobs',
    'Contact',
  ];
  return (
    <div>
      <MyFooter>
        <FooterGrid container>
          {allLinks.map(link => (
            <FooterLink href="#" variant="h6" key={link}>
              {link}
            </FooterLink>
          ))}
        </FooterGrid>
        <FooterGrid container sx={{ color: theme => theme.primary.main }}>
          <FooterLink href="#">
            <FacebookIcon />
          </FooterLink>
          <FooterLink href="#">
            <Twitter />
          </FooterLink>
          <FooterLink href="#">
            <YouTube />
          </FooterLink>
        </FooterGrid>
      </MyFooter>
    </div>
  );
}
