import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/components/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <img src={logo} alt="EZ-Transit Logo" className="logo" />
        <h2>Admin Dashboard</h2>
        <div className="dashboard-buttons">
          <div className="dashboard-button" onClick={() => navigate('/user-management')}>
            <h3>User Management</h3>
            <button>Manage Users</button>
          </div>
          <div className="dashboard-button" onClick={() => navigate('/topup-approval')}>
            <h3>Topup Approvals</h3>
            <button>Manage Topups</button>
          </div>
          <div className="dashboard-button" onClick={() => navigate('/announcement')}>
            <h3>Announcements</h3>
            <button>Add Announcement</button>
          </div>
        </div>
        <div className="logout-container" onClick={() => navigate('/logout')}>
          <h3>Logout</h3>
          <button className="logout-button" onClick={() => navigate('/logout')}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
