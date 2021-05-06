import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(1, 4),
    marginTop: 'auto',
    backgroundColor: 'gray',
    position: 'relative',
    textAlign: 'center',
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Copyright Chirstian Tabernacle Church All Rights Reserved.
          </Typography>
          {/* <Copyright /> */}
        </Container>
      </footer>
    </div>
  );
}
