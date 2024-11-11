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
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import deleteToken from '../core/deleteToken';
import '../metadata.json'
import { DashboardInfo } from '../widgets/WidgetStatic'

const drawerWidth = 240;

export default function SettingsInfo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);


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
                  <DashboardIcon sx={{ marginRight: 2 }} />
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
            <ListItem button key="Database Configuration">
                <DashboardIcon sx={{ marginRight: 2, color: '#FFFFFF'}}/>
              <ListItemText primary="Database Configuration" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Access lists">
                <PeopleIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Access lists" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Debug">
                <BarChartIcon sx={{ marginRight: 2, color: '#FFFFFF' }}/>
              <ListItemText primary="Debug" sx={{ color: '#FFFFFF' }} />
            </ListItem>
            <ListItem button key="Info" onClick={() => window.location.href = '/settings/info'}>
                <DashboardIcon sx={{ marginRight: 2, color: '#FFFFFF'}}/>
              <ListItemText primary="Info" sx={{ color: '#FFFFFF' }} />
            </ListItem>

          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
        <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
          System Information
        </Typography>
        <DashboardInfo />
        </Box>
      </Box>
    </ThemeProvider>
  );
}