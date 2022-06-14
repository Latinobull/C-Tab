import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  TablePagination,
  Typography,
} from '@material-ui/core';
import React from 'react';
import worshipImage from '../../img/worship.jpg';
const useStyles = makeStyles({
  top: {
    flexGrow: 1,
  },
  root: {
    maxWidth: 600,
    maxWidth: '100vw',
  },
  cardAction: {
    justifyContent: 'center',
  },
  media: {
    height: 200,
  },
  headline: {
    paddingBottom: 50,
    textAlign: 'center',
  },
  holder: {
    backgroundImage: `url(${worshipImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  text: {
    color: 'white',
    paddingLeft: '200px',
  },
  button: {
    backgroundColor: 'white',
    color: 'rgb(168,19,0)',
    padding: '10px 25px',
    borderRadius: '1px',
  },
  mission: {
    backgroundColor: 'rgb(168,19,0)',
    color: 'white',
    justifyContent: 'center',
    fontSize: '50px',
    padding: '50px 0px',
    marginBottom: '10px'
  },
  missionText: {
    maxWidth: '700px',
    fontSize: '30px',
  },
});
export default function Main_En() {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Grid
        className={classes.holder}
        container
        direction="column"
        justify="center"
      >
        <div className={classes.text}>
          <Typography style={{ fontSize: '32px' }}>A house on fire,</Typography>
          <Typography style={{ fontSize: '32px' }}>
            led by the Holy Spirit
          </Typography>
          <Button className={classes.button} variant="contained">
            Learn More
          </Button>
        </div>
      </Grid>
      <Grid
        container
        className={classes.mission}
        justifyContent="space-around"
        direction="row"
        alignItems="center"
      >
        <Grid item md={'5'}>
          {
            'We are not just a church, but a home and a hospital for the broken.'
          }
        </Grid>
        <Grid item md={'5'}>
          <Typography className={classes.missionText}>
            Our mission
            <br />
            We believe that we are not just a church but a home and a hospital
            for the broken. Everything we do is guided by the power of the Holy
            Spirit and the love that Christ has shown us
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
