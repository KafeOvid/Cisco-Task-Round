import React from 'react';
import '../styles/Dashboard.css'; // Ensure this path is correct

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h2>Total Users</h2>
                    <p>150</p>
                </div>
                <div className="dashboard-card">
                    <h2>Active Sessions</h2>
                    <p>45</p>
                </div>
                <div className="dashboard-card">
                    <h2>Revenue</h2>
                    <p>$2,500</p>
                </div>
                <div className="dashboard-card">
                    <h2>New Signups</h2>
                    <p>20</p>
                </div>
            </div>
            <div className="dashboard-footer">
                <p>&copy; 2024 KafeOvid</p>
            </div>
        </div>
    );
};

export default Dashboard;
