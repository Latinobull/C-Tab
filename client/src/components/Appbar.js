import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Appbar() {
  const classes = useStyles();
  const [anchorElHome, setAnchorElHome] = useState();
  const openHome = Boolean(anchorElHome);
  const handleCloseHome = () => {
    setAnchorElHome(null);
  };
  const handleMenuHome = event => {
    setAnchorElHome(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuHome}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElHome}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openHome}
            onClose={handleCloseHome}
          >
            <MenuItem onClick={handleCloseHome}>
              <Link href="/" color="inherit">
                Welcome
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseHome}>
              <Link href="/sp" color="inherit">
                English Main
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseHome}>
              <Link href="/sp" color="inherit">
                Espanol Principal
              </Link>
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Christian Tabernacle Church
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
