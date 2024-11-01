import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {loginUser} from './LoginServerSend'

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#4e00ba',
          color: 'white',
          padding: 2,
          textAlign: 'center', 
        }}
      >
        <Typography variant="h6">
          Admin Dashboard
        </Typography>
      </Box>
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};