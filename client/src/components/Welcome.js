import { Button, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import worshipImage from '../img/worship.jpg';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${worshipImage})`,
    backgroundSize: 'cover',
  },
  content: {
    backgroundColor: 'rgb(255,255,255, 0.4)',
    textAlign: 'center',
    padding: '100px 50px 50px 50px'
  },
}));
export default function Welcome() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <div className={classes.content}>
          {/* <Typography >
            Welcome to Christian Tabernacle, Choose your Preferred Language
          </Typography> */}
          <Typography variant="h3">
            A house on fire, led by the Holy Spirit
          </Typography>
          <br />
          <Typography variant="h3">
            Una casa en llamas, dirigida por el espíritu santo
          </Typography>
          <br />
          <Grid xs={12}>
            <Button size="large">
              <Link href="/en">English</Link>
            </Button>
            <Button size="large">
              <Link href="/sp">Spanish</Link>
            </Button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
