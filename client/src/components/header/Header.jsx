import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';

const Header = () => {
    const { navigationStatus } = useSelector(state => state.nav)
    return (
        <div className="w-full shadow p-4 flex items-center justify-between">
            <button type="button">
                <FontAwesomeIcon
                    data-testid="header__menu-bars"
                    onClick={() => {}}
                    icon={"bars"}
                    className="text-grey-medium"
                    size="lg"
                />
            </button>
            <div className="text-brand text-xl font-bold">{navigationStatus}</div>
            <button type="button">
                <FontAwesomeIcon
                    data-testid="header__settings-cog"
                    onClick={() => {}}
                    icon={"cog"}
                    className="text-grey-medium"
                    size="lg"
                />
            </button>
        </div>
    )
}

export default Header;
