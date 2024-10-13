import LoginPage from './Login/LoginPage';
import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box,
} from '@mui/material';
import Login from './Login/LoginPage';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { checkAuthCookie } from './Login/CookieCreating';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = checkAuthCookie();
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Login /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
