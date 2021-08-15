import React, { useMemo } from 'react'
import { Drawer } from '@material-ui/core';
import { useNavigate } from '../../hooks';
import { Routes } from '../../constants';
import { UserSection } from './components';
import { useSelector } from 'react-redux';
import { NavigationLink } from './components/navigationLink';
import { Button } from '../button';

const { DASHBOARD, WORKOUTS, MEALPLAN } = Routes;

const NavigationDrawer = ({ open, toggleOpen }) => {
    const { navigationStatus } = useSelector(state => state.nav);
    const { navigateTo } = useNavigate();

    const handleNavigation = (route) => {
        navigateTo({ location: route });
        toggleOpen();
    }
    
    return (
        <Drawer anchor={"left"} open={open} onClose={toggleOpen}>
            <div className="w-72 h-full flex flex-col">
                <UserSection />
                <div className="flex flex-col h-full">
                    {[DASHBOARD, WORKOUTS, MEALPLAN].map((link) => 
                        <NavigationLink onClick={(route)=> handleNavigation(route)} link={link} active={link === navigationStatus} />
                    )}
                </div>
            </div>
        </Drawer>
    )
}

export default NavigationDrawer;

