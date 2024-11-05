import React, { useState, useEffect } from 'react';
import { 
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { getSystemStats } from '../core/requestStats'

export const SystemMon = () => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [ramUsage, setRamUsage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Симуляция получения данных об использовании CPU и RAM
      getSystemStats()
        .then(stats => {
          setCpuUsage(stats.cpu);
          setRamUsage(stats.memory);
        })
        .catch(error => {
          console.error('Failed to fetch system stats:', error);
          setCpuUsage(0);
          setRamUsage(0);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        width: '500px'
      }}>
        <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
          System Monitor
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.secondary' }}>
              CPU
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress 
                variant="determinate" 
                value={cpuUsage}
                size={80}
                thickness={4}
                sx={{ color: theme.palette.primary.main }}
              />
              <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  {cpuUsage}%
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.secondary' }}>
              RAM
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress 
                variant="determinate" 
                value={ramUsage}
                size={80}
                thickness={4}
                sx={{ color: theme.palette.secondary.main }}
              />
              <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  {ramUsage}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export const WebsiteAvailability = () => {
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
        width: '500px'
      }}>
        <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
          Services Avability
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.secondary' }}>
              Uptime
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={99.9}
                size={80}
                thickness={4}
                sx={{ color: theme.palette.primary.main }}
              />
              <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  99.9%
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.secondary' }}>
              Response Time
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate" 
                value={85}
                size={80}
                thickness={4}
                sx={{ color: theme.palette.warning.main }}
              />
              <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  85ms
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};



