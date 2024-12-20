import React from 'react';
import Login from './Login/LoginPage';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import SettingsMain from './Settings/SettingsMain'
import SettingsInfo from './Settings/SettingsInfo'
import Dashboard from './Dashboard/DashboardMain'
import metadata from './metadata.json';

import './App.css'
import useToken from './core/useToken';
import Terminal from './Terminal/TerminalPage'


function App() {
  const { token, setToken } = useToken();
  
  if(!token && !(['DEV', 'ALPHA', 'BETA'].includes(metadata.buildTag))){
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
        <Route path="/settings" element={<SettingsMain/>} />
        <Route path="/settings/info" element={<SettingsInfo/>} />
      </Routes>
    </Router>
  );
}
export default App;
