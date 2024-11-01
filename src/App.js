import React from 'react';
import Login from './Login/LoginPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Preferences from './Preferences/Preferences'
import Dashboard from './Dashboard/DashboardMain'
import './App.css'
import useToken from './core/useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/preferences" element={<Preferences/>} />
      </Routes>
    </Router>
  );
}
export default App;
