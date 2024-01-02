import { Grid, Typography, styled } from '@mui/material';
import ServiceHands from '../img/ServiceHands.png';

const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-around',
  padding: '130px 0',
  height: '600px',
  backgroundSize: 'cover',
  backgroundColor: theme.primary.main,
  backgroundImage: `url(${ServiceHands})`,
  // filter: 'brightness(90%)',
}));

const ServiceDay = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '110px',
  color: theme.secondary.main,
  textAlign: 'center',
}));
const ServiceText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '45px',
  color: theme.secondary.main,
  textAlign: 'center',
}));
const ServiceTime = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '60px',
  color: theme.secondary.main,
}));
const Headline = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.secondary.main,
  padding: '20px 0',
  width: '100vw',
  color: theme.primary.main,
  textAlign: 'center',
  fontSize: '90px',
  fontWeight: 600,
}));
const MyMap = styled('iframe')(({ theme }) => ({
  width: '99vw',
  height: 800,
}));
export default function LiveServices() {
  const map = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_KEY}&q=616+Jamaica+Ave,+Brooklyn,+NY+11208`;
  return (
    <>
      {' '}
      <LiveGrid
        container
        direction="row"
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        {/* <Grid item>
          <Grid container direction="row"> */}
        <div>
          <ServiceDay>Wednesday</ServiceDay>
          <ServiceText variant="h6">Prayer Service</ServiceText>
          <ServiceTime variant="h6">8:00pm</ServiceTime>
        </div>
        <div>
          <ServiceDay>Friday</ServiceDay>
          <ServiceText variant="h6">Kids/Youth Service</ServiceText>
          <ServiceTime variant="h6">8:00pm</ServiceTime>
        </div>
        <div>
          <ServiceDay>Sunday</ServiceDay>
          <ServiceText variant="h6">Worship Service</ServiceText>
          <ServiceTime variant="h6">7:00pm</ServiceTime>
        </div>
        {/* </Grid>
        </Grid> */}
      </LiveGrid>
      <Headline variant="h6" sx={{ color: 'black' }}>
        616 Jamaica Ave. Brooklyn NY 11208
      </Headline>
      {map && (
        <MyMap
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src={map}
        />
      )}
    </>
  );
}
