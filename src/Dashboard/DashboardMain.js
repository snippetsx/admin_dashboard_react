import React, { useState } from 'react';
import { 
  Box,
  ListItem,
  ListItemText,
  List,
  Drawer,
  IconButton,
  Divider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import BarChartIcon from '@mui/icons-material/BarChartOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from  '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const drawerWidth = 240;

export default function DashboardMain() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleDrawer = () => {
    if(open === false){
      setOpen(true);
    } 
    else{
      setOpen(false);
    }
  };


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: `calc(100% - ${open ? drawerWidth : 0}px)`, ml: `${open ? drawerWidth : 0}px` }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleMenuClick}
              sx={{ transform: 'scale(1.2)' }}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                  <AccountCircleIcon sx={{ marginRight: 2 }} />
                 Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <AccountCircleIcon sx={{ marginRight: 2 }} />
                My account
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <SettingsIcon sx={{ marginRight: 2 }} />
                Settings
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <LogoutIcon sx={{ marginRight: 2 }} />
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              bgcolor: 'secondary.main',
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          
        >
          <Divider />
          <List>
            <ListItem button key="Dashboard">
                <DashboardIcon sx={{ marginRight: 2, color: '#FFFFFF'}}/>
              <ListItemText primary="Dashboard" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Users">
                <PeopleIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Users" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Reports">
                <BarChartIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Reports" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Settings">
                <SettingsIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Settings" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Preferences">
                <SettingsIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Preferences" sx={{ color: '#FFFFFF' }} />
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
            Welcome to the Dashboard!
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}