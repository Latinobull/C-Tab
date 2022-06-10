import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: 'auto',
    backgroundColor: 'rgb(168,19,0)',
    padding: '50px',
    paddingLeft: '200px',
  },
  text: {
    color: 'white',
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Grid container className={classes.text}>
          <Grid item lg={8}>
            <Typography variant="h6">
              CHRISTIAN TABERNACLE PENTECOSTAL CHURCH BROOKLYN
            </Typography>
            <Typography variant="h6">IGELSIA TABERNACULO CRISTIANO</Typography>
            <Typography>
              616 JAMAICA AVENUE
              <br />
              BROOKLYN,NY 11208
              <br />
              (555) 555-5555
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="h6">Services/Servicios</Typography>
            <Typography>
              Sunday / Domingo - 7pm
              <br />
              Wednesday / Miercoles - 8pm
              <br />
              Friday / Viernes - 8pm
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="h6">Follow Us</Typography>

            <a href="#" style={{ color: 'white' }}>
              Facebook
            </a>
            <Typography>InsertEmail@gmail.com</Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
