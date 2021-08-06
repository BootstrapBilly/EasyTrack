import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from '../../hooks';

const WizardNav = ({root: { route, displayText }, options}) => {
    const { pathname } = useLocation();
    const { navigateTo } = useNavigate();

    const currentSubPath = useMemo(() => {
        let result = null;

        Object.entries(options).forEach((option) => {
            const screen = option[1];
            const locationPathName = pathname.slice(1, pathname.length);
            if(locationPathName === screen.route) {
                result = screen.displayText;
            }
        })

        return result;
    }, [options, pathname])

    const handleNavigate = (route) => {
        navigateTo({location: route})
    }

    return (
        <div className={`flex px-4 text-lg items-center cursor-pointer`}>
            <div className={`${currentSubPath ? "text-grey-medium" : "font-bold"}`} onClick={() => handleNavigate(route)}>{displayText}</div>
            {currentSubPath &&             
            <div className="px-1">
                <FontAwesomeIcon
                        data-testid="header__settings-cog"
                        onClick={() => {}}
                        icon="chevron-right"
                        className="text-grey-medium"
                        size="sm"
                />
            </div>}
            <div className="font-bold">{currentSubPath}</div>
        </div>
    )
}

export default WizardNav;
