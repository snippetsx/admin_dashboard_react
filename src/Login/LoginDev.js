import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, TextField, Typography, AppBar, Toolbar, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {loginUser} from './LoginServerSend'
import './LoginPage.css'
import { sha256 } from 'js-sha256';
import authtoken from '../authtoken.json';

export default function Login({ setToken }) {
  const [token, setToken] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    
      setMsg(true);
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Please Enter Developer Token
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="token"
              label="DeveloperToken"
              type="password"
              id="token"
              error={!!msg}
              helperText={msg ? "Incorrect Token" : ""}
              className={msg ? 'shake-animation' : ''}
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}