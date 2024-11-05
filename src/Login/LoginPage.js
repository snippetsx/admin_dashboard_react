import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, TextField, Typography, AppBar, Toolbar, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {loginUser} from './LoginServerSend'
import './LoginPage.css'
import { sha256 } from 'js-sha256';

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    } catch (error) {
      // Add shake animation and red color to form if error
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
            Please Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={!!msg}
              helperText={msg ? "Incorrect password" : ""}
              className={msg ? 'shake-animation' : ''}
              autoComplete="current-password"
              onChange={e => setPassword(sha256(e.target.value))}
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};