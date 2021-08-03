import React from 'react'
import { Drawer } from '@material-ui/core';
import { useNavigate } from '../../hooks';
import { Routes } from '../../constants';
import { UserSection } from './components';

const { DASHBOARD, WORKOUTS, MEALPLAN } = Routes;

const NavigationDrawer = ({ open, toggleOpen }) => {
    const { navigateTo } = useNavigate();

    const handleNavigation = (route) => {
        navigateTo({ location: route });
        toggleOpen();
    }
    
    return (
        <Drawer anchor={"left"} open={open} onClose={toggleOpen}>
            <div className="w-72">
                <UserSection />
                <div className="p-6">
                    {[DASHBOARD, WORKOUTS, MEALPLAN].map((link) => 
                        <div onClick={()=> handleNavigation(link)}>{link}</div>
                    )}
                </div>
            </div>
        </Drawer>
    )
}

export default NavigationDrawer;

