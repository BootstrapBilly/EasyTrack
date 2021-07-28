import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { jwt } = useSelector((state) => state.auth);
    
    return (
        <div data-testid="dashboard">
            dashboard
        </div>
    )
}

export default Dashboard;
