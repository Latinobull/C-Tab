import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(168,19,0)',
  },
  title: {
    flexGrow: 1,
  },
  appBarButton: {
    color: 'white',
    marginRight: '15px',
    textDecoration: 'none',
  },
  appBar: {
    paddingBottom: '25px',
    paddingTop: '25px',
    backgroundColor: 'transparent',
  },
}));
export default function Appbar() {
  const classes = useStyles();
  const [anchorElHome, setAnchorElHome] = useState();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Christian Tabernacle Church
          </Typography>

          <Typography variant="h6">
            <a href="/en" className={classes.appBarButton}>
              About
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="/en" className={classes.appBarButton}>
              Join us
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="/en" className={classes.appBarButton}>
              Ministries
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="/en" className={classes.appBarButton}>
              Testimonies
            </a>
          </Typography>
          <Typography variant="h6">
            <a href="/en" className={classes.appBarButton}>
              Contact
            </a>
          </Typography>
          <a href="/" className={classes.appBarButton}>
            <FacebookIcon />
          </a>
          <a href="/" className={classes.appBarButton}>
            <MailOutlinedIcon />
          </a>
          <a href="/" className={classes.appBarButton}>
            <InstagramIcon />
          </a>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
