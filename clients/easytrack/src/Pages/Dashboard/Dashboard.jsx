import React from 'react'
import { Portal } from '../../components';
import { useNavigate } from '../../hooks';
import { Routes } from '../../constants';

const { WORKOUTS, MEALPLAN } = Routes;

const Dashboard = () => {
    
    const { navigateTo } = useNavigate();

    return (
        <div className="flex flex-col w-full items-center py-6 md:flex-row md:justify-center cursor-pointer" data-testid="dashboard">
            <Portal name="Workouts" imgName="workouts-background" className="md:mr-4" onClick={() => navigateTo({ location: WORKOUTS })} />
            <Portal name="Meal plan" imgName="meal-plan-background" className="mt-6 md:mt-0 md:ml-4" onClick={() => navigateTo({ location: MEALPLAN })} />
        </div>
    )
}

export default Dashboard;
