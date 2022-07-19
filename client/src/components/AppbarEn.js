import React, { useState } from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, Link } from '@mui/material';

const mobilePages = [
  'Our Beliefs',
  'Our Founder',
  'Our Team',
  'Our Services',
  'Our Classes',
  'Ministries',
  'Pastors',
];
const pages = ['Ministries', 'Pastors'];
const aboutDrop = ['Our Beliefs', 'Our Founder', 'Our Team'];
const joinDrop = ['Our Services', 'Our Bible Studies'];
const MyAppBar = styled(AppBar)(({ theme }) => ({
  padding: '25px 0px',
  backgroundColor: theme.primary.main,
}));
const Logo = styled(Link)(() => ({
  color: 'white',
  marginRight: '15px',
  textDecoration: 'none',
  padding: '0px 5px',
}));
const AppbarContent = styled(Link)(({ theme }) => ({
  color: theme.secondary.main,
  marginRight: '15px',
  textDecoration: 'none',
  textAlign: 'center',
  fontWeight: 600,
}));
const NavContent = styled(Link)(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
}));
const MyIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.secondary.main,
}));
export default function Appbar() {
  // const classes = useStyles();
  const [anchorElHome, setAnchorElHome] = useState(null);
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [joinAnchor, setJoinAnchor] = useState(null);

  const handleOpenHome = event => {
    setAnchorElHome(event.currentTarget);
  };

  const handleCloseHome = () => {
    setAnchorElHome(null);
  };
  const handleOpenAbout = event => {
    setAboutAnchor(event.currentTarget);
  };
  const handleCloseAbout = e => {
    setAboutAnchor(null);
  };

  const handleOpenJoin = event => {
    setJoinAnchor(event.currentTarget);
  };
  const handleCloseJoin = e => {
    setJoinAnchor(null);
  };
  return (
    <div>
      <MyAppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <AppbarContent href="/en">
              Christian Tabernacle Church
            </AppbarContent>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              paddingRight: { xs: '30px', md: '0px' },
            }}
          >
            <MyIconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenHome}
              color="primary"
            >
              <MenuIcon sx={{ paddingRight: { xs: '10px' } }} />
            </MyIconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElHome}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElHome)}
              onClose={handleCloseHome}
            >
              {mobilePages.map(page => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    <NavContent href={`/en/${page}`} onClick={handleCloseHome}>
                      {page}
                    </NavContent>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <AppbarContent href="/en">
                Christian Tabernacle Church
              </AppbarContent>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'inherit' } }}>
            <Box>
              <Typography key={'About'} variant="h6">
                <AppbarContent
                  aria-owns={aboutAnchor ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onMouseOver={handleOpenAbout}
                  onClick={handleOpenAbout}
                >
                  {'About'}
                </AppbarContent>
              </Typography>
              <Menu
                id="menu-appbar2"
                anchorEl={aboutAnchor}
                open={Boolean(aboutAnchor)}
                onClose={handleCloseAbout}
                MenuListProps={{ onMouseLeave: handleCloseAbout }}
              >
                {aboutDrop.map(about => (
                  <NavContent
                    key={about}
                    underline="none"
                    href={`/en/${about}`}
                  >
                    <MenuItem onClick={handleCloseAbout} href={'/en'}>
                      <Typography textAlign="center">{about}</Typography>
                    </MenuItem>
                  </NavContent>
                ))}
              </Menu>
            </Box>
            <Box>
              <Typography key={'Join'} variant="h6">
                <AppbarContent
                  aria-owns={joinAnchor ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onMouseOver={handleOpenJoin}
                  onClick={handleOpenJoin}
                >
                  {'Join Us'}
                </AppbarContent>
              </Typography>
              <Menu
                id="menu-appbar3"
                anchorEl={joinAnchor}
                open={Boolean(joinAnchor)}
                onClose={handleCloseJoin}
                MenuListProps={{ onMouseLeave: handleCloseJoin }}
              >
                {joinDrop.map(join => (
                  <NavContent key={join} href={`/en/${join}`}>
                    <MenuItem onClick={handleCloseJoin}>
                      <Typography textAlign="center">{join}</Typography>
                    </MenuItem>
                  </NavContent>
                ))}
              </Menu>
            </Box>
            {pages.map(page => (
              <Typography key={page} variant="h6">
                <AppbarContent href={`/en/${page}`}>{page}</AppbarContent>
              </Typography>
            ))}
          </Box>
          <Logo
            href="https://www.facebook.com/christiantabernacle.church.7"
            target="_blank"
          >
            <FacebookIcon />
          </Logo>
          {/* <Typography>
            <AppbarContent>Donate</AppbarContent>
          </Typography> */}
        </Toolbar>
      </MyAppBar>
    </div>
  );
}
