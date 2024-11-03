import React from 'react';
import Login from './Login/LoginPage';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Settings from './Settings/SettingsMain'
import Dashboard from './Dashboard/DashboardMain'
import './App.css'
import useToken from './core/useToken';
import Terminal from './Terminal/TerminalPage'


function App() {
  const { token, setToken } = useToken();
  
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/dashboard/configuration" element={<Settings />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/reports" element={<Reports />} /> */}
        <Route path="/dashboard/console" element={<Terminal/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}
export default App;
