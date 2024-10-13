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

const LoginPageWithTheme = () => (
  <ThemeProvider theme={theme}>
    <LoginPage />
  </ThemeProvider>
);

let isPasswordIncorrect = null;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempt with:', email, password);
    isPasswordIncorrect = true;
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              error={isPasswordIncorrect}
              helperText={isPasswordIncorrect ? "Incorrect password" : ""}
              InputProps={{
                className: isPasswordIncorrect ? 'shake-animation' : '',
              }}
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
