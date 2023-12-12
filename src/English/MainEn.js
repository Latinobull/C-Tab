import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';
import churchImg from '../img/churchBuilding.jpg';
import OptionEn from './OptionsEn';
import backgroundImg from '../videos/MainVideo.mp4';
import churchSVG from '../img/svg/church.svg';
import crossSVG from '../img/svg/cross.svg';
import geoSVG from '../img/svg/geo.svg';
import handSVG from '../img/svg/hand.svg';
import video2 from '../videos/video2.png';
import { Link } from 'react-router-dom';
const MainGrid = styled(Grid)(({ theme }) => ({
  height: '800px',
  textAlign: 'center',
  justifyContent: 'center',
}));
const MyVideo = styled('video')`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  min-width: 100%;
  max-height: 980px;
  filter: brightness(75%);
`;
const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  padding: '20px 25px',
  border: 'solid 3px white',
  borderRadius: '1px',
  marginTop: '15px',
  width: '250px',
  fontSize: '20px',
  transition: 'border .07s',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'solid 0px white',
  },
}));
const MissionGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.secondary.main,
  justifyContent: 'center',
  fontSize: '50px',
  padding: '160px 0px',
  height: '1000px',
}));
const MissionText = styled(Typography)(({ theme }) => ({
  maxWidth: '1500px',
  fontSize: '45px',
  textAlign: 'center',
  color: theme.primary.main,
  fontWeight: '400',
}));
const MyQuote = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${churchImg}) `,
  maxWidth: '99vw',
  height: '660px',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

const QuoteText = styled(Typography)(({ theme }) => ({
  maxWidth: '500px',
  backgroundColor: theme.secondary.main,
  borderRadius: '1px',
  fontSize: '45px',
  color: theme.primary.main,
  padding: '50px 125px',
}));
const QuoteText2 = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
}));
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '180px',
  color: theme.primary.main,
}));
const OpenText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '180px',
  color: theme.secondary.main,
  letterSpacing: '2px',
}));

const InvitedContainer = styled(Grid)(({ theme }) => ({
  height: '1000px',
  background: theme.secondary.main,
  textAlign: 'center',
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
}));

const InvitedHeader = styled(Typography)(({ theme }) => ({
  color: theme.primary.main,
  fontSize: '170px',
}));
const LinkContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const SecondLink = styled(Link)(({ theme }) => ({
  color: theme.primary.main,
  margin: '0px 40px',
  fontSize: '40px',
  textDecoration: 'none',
  '&:hover': {
    transform: 'scale(0.9)',
  },
}));
export default function Main_En() {
  return (
    <div>
      <MyVideo autoPlay loop muted id="video">
        <source src={backgroundImg} type="video/mp4" />
      </MyVideo>
      <MainGrid container alignItems="center">
        <Grid item>
          <OpenText>A House On Fire</OpenText>
        </Grid>
      </MainGrid>
      <InvitedContainer>
        <InvitedHeader>You're Invited!</InvitedHeader>

        <LinkContainer>
          <SecondLink href="">
            <img src={geoSVG} alt="navigate" />
            <p>JOIN US</p>
          </SecondLink>
          <SecondLink href="">
            <img src={handSVG} alt="hands out" />
            <p>MINISTRIES</p>
          </SecondLink>
          <SecondLink href="">
            <img src={crossSVG} alt="beliefs" />
            <p>BELIEFS</p>
          </SecondLink>
          <SecondLink href="">
            <img src={churchSVG} alt="church" />
            <p>LEADERS</p>
          </SecondLink>
        </LinkContainer>
      </InvitedContainer>
      {/* <Carousel /> */}
      <div
        style={{
          backgroundImage: `url(${video2})`,
          width: '100vw',
          height: '630px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)',
        }}
      ></div>
      {/* <OptionEn /> */}
      <MissionGrid container direction="row" alignItems="center">
        <Grid item>
          <Headers>Our Mission</Headers>
          <MissionText variant="h6">
            We believe that we are not just a church but a <b>home</b> and a{' '}
            <b>hospital</b> for the broken. Everything we do is guided by the
            power of the <b>Holy Spirit</b> and the love that <b>Christ</b> has
            shown us. Christian Tabernacle was established in <b>1984</b> by our
            founder <b>Josefina De La Rosa</b>. Her vision still stands true to
            this day with her daughter and our pastors,{' '}
            <b>Pastor Damaris & Frank Perez</b>, continuing the legacy.
          </MissionText>
        </Grid>
      </MissionGrid>
      <MyQuote container>
        <QuoteText variant="h5">
          “Then have them make a sanctuary for me, and I will dwell among them."
          <QuoteText2 variant="h6">Exodus 25:8</QuoteText2>
        </QuoteText>
      </MyQuote>
    </div>
  );
}
