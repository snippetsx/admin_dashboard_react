import React from 'react';
import { 
  Box,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import metadata from '../metadata.json';

export const DashboardInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}>
        <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
          Dashboard Info
        </Typography>
        <Typography paragraph>
          Current Build: {metadata.buildMajor}.{metadata.buildMinor}.{metadata.buildRevision} {metadata.buildTag}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

