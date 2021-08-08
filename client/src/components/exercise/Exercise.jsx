import React from 'react'

const Exercise = ({ name, muscle, backgroundColor, onClick }) => {
    return (
        <div className="flex flex-col font-normal text-sm w-full shadow text-center" onClick={onClick}>
            <div className="w-full flex items-center justify-center" style={{ backgroundColor }}><img src={require(`../../Assets/${muscle.toLowerCase()}.svg`).default} className="h-24" alt="portal_background" /> </div>
            <div className="text-white bg-brand h-12 flex items-center justify-center">{name}</div>
        </div>
    )
}

export default Exercise;
