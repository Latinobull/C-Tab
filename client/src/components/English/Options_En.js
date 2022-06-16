import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import laptopImg from '../../img/laptop.jpg';
import kidImg from '../../img/kids.jpg';
import handImg from '../../img/hands.jpg';
const useStyles = makeStyles({
  main: {
    justifyContent: 'space-evenly',
    paddingTop: '100px',
  },
  img: {
    width: '600px',
    height: '400px',
  },
  button: {
    backgroundColor: 'rgb(168,19,0)',
    color: 'white',
    padding: '20px 40px',
    borderRadius: '1px',
  },
});
export default function Option_En() {
  const classes = useStyles();
  return (
    <div>
      {/* Join us Online */}
      <Grid container className={classes.main}>
        <Grid item>
          <img src={laptopImg} className={classes.img} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Typography variant="h3">Join us Online</Typography>
          <Typography variant="h6">
            We have virtual services and bible studies via zoom and facebook. We
            host kids, teens, and adult bible study, view our schedule here. We
            host FB live services every Sunday, Wednesday, and Friday. View our
            virtual services schedule here.
          </Typography>
          <Button className={classes.button} variant="contained">
            Watch
          </Button>
        </Grid>
      </Grid>
      {/* Our Ministries */}
      <Grid container className={classes.main} direction="row-reverse">
        <Grid item>
          <img src={kidImg} className={classes.img} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Typography variant="h3">Our Ministries</Typography>
          <Typography variant="h6">
            Everyone who comes to Christian Tabernacle, governs a special
            talent. We aim to foster and grow those gifts within our
            congregation. Read more about the various ministries we have at
            Christian Tabernacle.
          </Typography>
          <Button
            className={classes.button}
            variant="contained
          "
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
      {/* Changing the world */}
      <Grid container className={classes.main}>
        <Grid item>
          <img src={handImg} className={classes.img} />
        </Grid>
        <Grid item style={{ width: '500px' }}>
          <Typography variant="h3">
            Changing the world is possible. We’ve done it before.
          </Typography>
          <Typography variant="h6">
            Our leadership team bring years of devotion and experience to govern
            our church. Anointed and passionate, our team serves under the
            direction of God and the Holy Spirit.
          </Typography>
          <Button
            className={classes.button}
            variant="contained
          "
          >
            Watch
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
