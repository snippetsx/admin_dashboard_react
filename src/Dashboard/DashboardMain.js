import React, { useState } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box,
  ListItem,
  ListItemText,
  List,
  Drawer,
  IconButton
} from '@mui/material';
import ListItemIcon from '@mui/icons-material/List'
import PeopleIcon from'@mui/icons-material/People'
import DashboardIcon from'@mui/icons-material/Dashboard'
import BarChartIcon from'@mui/icons-material/BarChart'
import SettingsIcon from'@mui/icons-material/Settings'
import ChevronLeftIcon from'@mui/icons-material/ChevronLeft'
import MenuIcon from'@mui/icons-material/Menu'

import {
    Settings,
} from '@mui/icons-material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const DashboardPageWithTheme = () => (
  <ThemeProvider theme={theme}>
    <DashboardPage />
  </ThemeProvider>
);

const DashboardPage = () => {
const [isMenuHidden, setIsMenuHidden] = useState('');
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#4e00ba',
          color: 'white',
          padding: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">
            Admin Dashboard
        </Typography>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={() => {
            // Здесь должна быть логика выхода
            // navigate('/login');
          }}
        >
          Выйти
        </Button>
      </Box>
      <Drawer
        variant="persistent"
        anchor="left"
        open={!isMenuHidden}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6">
            Меню
          </Typography>
          <IconButton onClick={() => setIsMenuHidden(true)}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Пользователи" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Статистика" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsMenuHidden(false)}
        edge="start"
        sx={{ marginRight: 2, ...(isMenuHidden && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Добро пожаловать в панель администратора
          </Typography>
          
          <Box sx={{ mt: 4, width: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Быстрые действия
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <Button variant="outlined" sx={{ m: 1 }}>Управление пользователями</Button>
              <Button variant="outlined" sx={{ m: 1 }}>Статистика</Button>
              <Button variant="outlined" sx={{ m: 1 }}>Настройки системы</Button>
            </Box>
          </Box>
          
          <Box sx={{ mt: 4, width: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Последние действия
            </Typography>
            {/* Здесь можно добавить компонент для отображения последних действий */}
          </Box>
        </Box>
      </Container>
      
      <Box sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        textAlign: 'center', 
        padding: '10px',
        backgroundColor: 'background.paper'
      }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} LCSA и SnippetsX. Все права защищены.
        </Typography>
      </Box>
    </>
  );
};



export default DashboardPageWithTheme;
