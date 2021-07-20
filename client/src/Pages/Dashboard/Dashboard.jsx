import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { jwt } = useSelector((state) => state.auth);

    console.log(jwt);
    return (
        <div>
            dashboard
        </div>
    )
}

export default Dashboard;
