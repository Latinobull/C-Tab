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

const pages = ['Sobre', 'Únete', 'Ministerios', 'Lideres'];
const MyAppBar = styled(AppBar)`
  padding: 25px 0px;
  background-color: rgb(168, 239, 255);
`;
const Logo = styled('a')`
  margin-right: 15px;
  text-decoration: none;
  padding: 0px 5px;
`;
const AppbarContent = styled('a')`
  margin-right: 15px;
  text-decoration: none;
  text-align: center;
`;
const NavContent = styled('a')`
  color: rgb(168, 239, 255);
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
      <MyAppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <AppbarContent href="/sp">
              Iglesia Tabernaculo Cristiano
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
                    <NavContent href={`/sp/${page}`} onClick={handleCloseHome}>
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
              <AppbarContent href="/sp">
                Iglesia Tabernaculo Cristiano
              </AppbarContent>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'inherit' } }}>
            {pages.map(page => (
              <Typography key={page} variant="h6">
                <AppbarContent href={`/sp/${page}`}>{page}</AppbarContent>
              </Typography>
            ))}
          </Box>
          <Logo href="https://www.facebook.com/christiantabernacle.church.7">
            <FacebookIcon />
          </Logo>
          <Button color="inherit">Donación</Button>
        </Toolbar>
      </MyAppBar>
    </div>
  );
}
