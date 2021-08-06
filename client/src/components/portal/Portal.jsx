import React from 'react'

const Portal = ({ name, onClick, imgName, component, className }) => {
    return (
        <div onClick={onClick} className={`h-52 w-72 ${className} flex flex-col bg-almostWhite`} data-testid={`portal__${name}`}>
            <div className="h-full p-4 overflow-hidden">
                {imgName ? <img src={require(`../../Assets/${imgName}.svg`).default} className="px-8 h-32" alt="portal_background" /> 
                : <div className="px-2 h-32">{component}</div>}
            </div>
            <div className="h-16 flex items-center pl-2 bg-brand text-white rounded rounded-t-none">{name}</div>
        </div>
    )
}

export default Portal;
