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
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { createAuthCookie } from './CookieCreating';


const LoginPageWithTheme = () => (
  <ThemeProvider theme={theme}>
    <LoginPage />
  </ThemeProvider>
);


const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt with:', username, password);
    if (username === 'snippetsx' && password === '2371') 
    {
      createAuthCookie(username);
      navigate('/dashboard');
    }
    else
    {
      setMsg(true)
    }
    
  };

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
      
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Sign in to Admin Panel
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={msg}
              helperText={msg ? "Incorrect password" : ""}
              className={msg ? 'shake-animation' : ''}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
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
          © {new Date().getFullYear()} LCSA and SnippetsX. Все права защищены.
        </Typography>
      </Box>
    </>
  );
};


export default LoginPageWithTheme;
