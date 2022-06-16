import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About', 'Join us', 'Ministries', 'Testimonies', 'Contact'];
const MyAppBar = styled(AppBar)`
  padding: 25px 0px;
  background-color: rgb(168, 19, 0);
`;
const Logo = styled('a')`
  color: white;
  marginright: 15px;
  text-decoration: none;
  padding: 0px 10px;
`;
const AppbarContent = styled('a')`
  color: white;
  marginright: 15px;
  text-decoration: none;
  padding: 0px 20px;
`;
const NavContent = styled('a')`
  color: rgb(168, 19, 0);
`;
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
      <MyAppBar >
        <Toolbar>
          <Typography variant="h4" sx={{ display: { xs: 'none', md: 'flex' } }}>
            Christian Tabernacle Church
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenHome}
              color="inherit"
            >
              <MenuIcon />
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
                    <NavContent href="/en" onClick={handleCloseHome}>
                      {page}
                    </NavContent>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              Christian Tabernacle Church
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'inherit' } }}>
            {pages.map(page => (
              <Typography key={page} variant="h6">
                <AppbarContent href="/en">{page}</AppbarContent>
              </Typography>
            ))}
          </Box>
          <Logo href="/">
            <FacebookIcon />
          </Logo>
          <Logo href="/">
            <MailOutlinedIcon />
          </Logo>
          <Logo href="/">
            <InstagramIcon />
          </Logo>
          <Button color="inherit">Donate</Button>
        </Toolbar>
      </MyAppBar>
    </div>
  );
}
