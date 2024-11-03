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
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import LogoutIcon from  '@mui/icons-material/LogoutOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import deleteToken from '../core/deleteToken';
import {SystemMon, WebsiteAvailability} from '../widgets/WidgetsStatistics'

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
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
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
              <MenuItem onClick={() => { handleMenuClose(); window.location.href = '/dashboard'; }}>
                  <AccountCircleIcon sx={{ marginRight: 2 }} />
                 Dashboard
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <AccountCircleIcon sx={{ marginRight: 2 }} />
                 Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <AccountCircleIcon sx={{ marginRight: 2 }} />
                My account
              </MenuItem>
              <MenuItem onClick={() => { handleMenuClose(); window.location.href = '/settings'; }}>
                  <SettingsIcon sx={{ marginRight: 2 }} />
                Settings
              </MenuItem>
              <MenuItem onClick={() => { 
                handleMenuClose(); 
                deleteToken(); 
                window.location.reload();
              }}>
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
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <List>
            <ListItem button key="Dashboard" onClick={() => window.location.href = '/dashboard'}>
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
            <ListItem button key="Server Configuration">
                <ConstructionOutlinedIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Server Configuration" sx={{ color: '#FFFFFF' }} />
            </ListItem>
          <ListItem button key="Terminal" onClick={() => window.location.href = '/dashboard/console'}>
              <TerminalOutlinedIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
            <ListItemText primary="Terminal" sx={{ color: '#FFFFFF' }} />
          </ListItem>


          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex', gap: 3 }}>
            <SystemMon/>
            <WebsiteAvailability/>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}