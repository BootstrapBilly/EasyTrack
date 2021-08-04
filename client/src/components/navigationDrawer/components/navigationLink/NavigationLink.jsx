import React from 'react'
import { startCase } from 'lodash';

const NavigationLink = ({ link, onClick, active }) => {
    return (
        <div onClick={()=> onClick(link)} className={`border-b border-grey-light w-full py-4 pl-6 ${active && "bg-brand text-white"} cursor-pointer`}>{startCase(link)}</div>
    )
}

export default NavigationLink;

