import React, { useState } from 'react'
import { startCase } from 'lodash';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { NavigationDrawer } from '../navigationDrawer';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { navigationStatus } = useSelector(state => state.nav)

    const toggleSideDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <div className="w-full shadow p-4 flex items-center justify-between">
            <button type="button">
                <FontAwesomeIcon
                    data-testid="header__menu-bars"
                    icon={"bars"}
                    className="text-grey-medium"
                    size="lg"
                    onClick={toggleSideDrawer}
                />
                <NavigationDrawer open={drawerOpen} toggleOpen={toggleSideDrawer} />
            </button>
            <div className="text-brand text-xl font-bold">{startCase(navigationStatus.split("/")[0])}</div>
            <div/>
        </div>
    )
}

export default Header;
