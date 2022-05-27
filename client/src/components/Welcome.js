import { Button, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';

export default function Welcome() {
  return (
    <div>
      {/* <Grid container>
        <Typography>Where are you</Typography>
      </Grid> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh' }}
      >
        <Typography>
          Welcome to Christian Tabernacle, Choose your Preferred Language
        </Typography>
        <Typography variant='h3'>
          Input Mission statement here
        </Typography>
        <br />
        <Typography>***Spanish Translation***</Typography>
        <br />
        <Grid xs={12}>
          <Button size="large">
            <Link href="/en">English</Link>
          </Button>
          <Button size="large">
            <Link href="/sp">Spanish</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
