import React from 'react'

const Portal = ({ name, onClick, imgName, component, className }) => {
    return (
        <div onClick={onClick} className={`h-64 w-72 ${className} flex flex-col bg-almostWhite cursor-pointer shadow-2xl`} data-testid={`portal__${name}`}>
            <div className={`h-full overflow-hidden ${imgName && "p-4"}`}>
                {imgName ? <img src={require(`../../Assets/${imgName}.svg`).default} className="px-8 h-48" alt="portal_background" /> 
                : <div className="px-2 h-48">{component}</div>}
            </div>
            <div className="h-16 flex items-center pl-2 border-t border-grey-light rounded rounded-t-none font-bold">{name}</div>
        </div>
    )
}

export default Portal;
