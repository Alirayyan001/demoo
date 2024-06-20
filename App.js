// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Announcement from './components/Announcement';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import TopupApproval from './components/TopupApproval';
import UserManagement from './components/UserManagement';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/topup-approval" element={<TopupApproval />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
