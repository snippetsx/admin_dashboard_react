import React, { useState } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Box,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';


const PreferencesPageWithTheme = () => (
  <ThemeProvider theme={theme}>
    <PreferencesPage />
  </ThemeProvider>
);


const PreferencesPage = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#4e00ba',
          color: 'white',
          padding: 2,
          textAlign: 'bottom',
        }}
      >
        <Typography variant="h6">
          Admin Dashboard
        </Typography>
      </Box>

    </>
  )
}
export default PreferencesPageWithTheme;