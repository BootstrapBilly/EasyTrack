import React, { useState } from 'react'
import { Drawer } from '@material-ui/core';
import { useNavigate } from '../../hooks';
import { Routes } from '../../constants';
import { UserSection, DeleteAccount } from './components';
import { useSelector } from 'react-redux';
import { NavigationLink } from './components/navigationLink';
import { Button } from '../button';

const { DASHBOARD, WORKOUTS, MEALPLAN } = Routes;

const NavigationDrawer = ({ open, toggleOpen }) => {
    const { navigationStatus } = useSelector(state => state.nav);
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
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
                <div className="pb-16 w-full flex py-2 justify-center">
                    <div className="w-80%">
                        {showPasswordPrompt ? <DeleteAccount handleNo={() => setShowPasswordPrompt(false)} /> : <Button variant="danger" className="pt-6" onClick={() => setShowPasswordPrompt(true)}>DELETE ACCOUNT</Button>}
                    </div>
                </div>
            </div>
        </Drawer>
    )}

export default NavigationDrawer;

