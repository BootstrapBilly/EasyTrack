import React from 'react'
import { Portal } from '../../components';

const Dashboard = () => {
    
    return (
        <div className="flex flex-col w-full items-center py-6 md:flex-row md:justify-center cursor-pointer" data-testid="dashboard">
           <Portal name="Workouts" imgName="workouts-background" className="md:mr-4" />
           <Portal name="Meal plan" imgName="meal-plan-background" className="mt-6 md:mt-0 md:ml-4" />
        </div>
    )
}

export default Dashboard;
