import { Button, Card, Grid, Typography } from '@material-ui/core';
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
        style={{ minHeight: '90vh' }}
      >
        <Typography>
          Welcome to Christian Tabernacle, Choose your Preferred Language
        </Typography>
        <br />
        <Typography>Spanish Translation</Typography>
        <br />
        <Grid xs={12}>
          <Button size="large">English</Button>
          <Button size="large">Spanish</Button>
        </Grid>
      </Grid>
    </div>
  );
}
