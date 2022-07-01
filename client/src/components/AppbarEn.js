import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About', 'Join us', 'Ministries', 'Pastors'];
const MyAppBar = styled(AppBar)(({ theme }) => ({
  padding: '25px 0px',
  backgroundColor: theme.primary.main,
}));
const Logo = styled('a')(() => ({
  color: 'black',
  marginRight: '15px',
  textDecoration: 'none',
  padding: '0px 5px',
}));
const AppbarContent = styled('a')(({ theme }) => ({
  color: theme.secondary.main,
  marginRight: '15px',
  textDecoration: 'none',
  textAlign: 'center',
  fontWeight: 600,
}));
const NavContent = styled('a')(({ theme }) => ({
  color: theme.secondary.main,
  textDecoration: 'none',
}));
export default function Appbar() {
  // const classes = useStyles();
  const [anchorElHome, setAnchorElHome] = useState(null);

  const handleOpenHome = event => {
    setAnchorElHome(event.currentTarget);
  };

  const handleCloseHome = () => {
    setAnchorElHome(null);
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
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenHome}
              color="inherit"
            >
              <MenuIcon sx={{ paddingRight: { xs: '10px' } }} />
            </IconButton>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
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
            {pages.map(page => (
              <Typography key={page} variant="h6">
                <AppbarContent href={`/en/${page}`}>{page}</AppbarContent>
              </Typography>
            ))}
          </Box>
          <Logo href="https://www.facebook.com/christiantabernacle.church.7">
            <FacebookIcon />
          </Logo>
          <Typography>
            <AppbarContent>Donate</AppbarContent>
          </Typography>
        </Toolbar>
      </MyAppBar>
    </div>
  );
}
