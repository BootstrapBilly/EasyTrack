import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
    return (
        <div className="py-1">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="cursor-pointer flex flex-col items-center justify-center">
                    <FontAwesomeIcon
                    className="text-green"
                    icon={"plus"}
                    size="2x"
                    />
                    <div className="text-sm text-grey-medium">Add a workout</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

