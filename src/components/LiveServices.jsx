import { Grid, Typography, styled } from '@mui/material';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-around',
  padding: '130px 0',
}));

const ServiceTextBold = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '40px',
  color: theme.primary.main,
}));
const ServiceText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '18px',
  color: theme.primary.main,
}));
const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '30px',
  color: theme.primary.main,
}));
const Headline = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  padding: '20px 0',
  width: '100vw',
  color: 'white',
  textAlign: 'center',
  fontSize: '35px',
  fontWeight: 600,
}));
const MyMap = styled('iframe')(({ theme }) => ({
  width: '99vw',
  height: 500,
}));
export default function LiveServices() {
  const map = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_KEY}&q=616+Jamaica+Ave,+Brooklyn,+NY+11208`;
  return (
    <>
      {' '}
      <LiveGrid
        container
        direction="row"
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid item>
          <Grid container direction="column">
            <BoldText sx={{ fontSize: '120px' }}>Live Services</BoldText>
            <Grid>
              <Grid container justifyContent={'space-between'}>
                <ServiceTextBold variant="h6">Sundays </ServiceTextBold>
                <ServiceTextBold variant="h6">7:00pm</ServiceTextBold>
              </Grid>
              <ServiceText variant="h6">Worship Serivce</ServiceText>
            </Grid>

            <Grid>
              <Grid container justifyContent={'space-between'}>
                <ServiceTextBold variant="h6">Wednesday </ServiceTextBold>
                <ServiceTextBold variant="h6">8:00pm</ServiceTextBold>
              </Grid>
              <ServiceText variant="h6">Prayer Serivce</ServiceText>
            </Grid>
            <Grid>
              <Grid container justifyContent={'space-between'}>
                <ServiceTextBold variant="h6">Friday </ServiceTextBold>
                <ServiceTextBold variant="h6">8:00pm</ServiceTextBold>
              </Grid>
              <ServiceText variant="h6">Youth/Kids Service</ServiceText>
            </Grid>
          </Grid>
        </Grid>
      </LiveGrid>
      <Headline variant="h6">
        We're located at 616 Jamaica Ave. Brooklyn NY 11208{' '}
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
