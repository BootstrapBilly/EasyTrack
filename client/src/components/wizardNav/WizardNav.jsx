import React, { useMemo } from 'react';
import { useLocation } from "react-router-dom";

const WizardNav = ({root, options}) => {
    const { pathname } = useLocation();

    const currentPath = useMemo(() => {

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

    return (
        <div className="flex">
            <div>{root}</div>
            <div>{currentPath}</div>
        </div>
    )
}

export default WizardNav;
