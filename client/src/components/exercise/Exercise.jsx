import React from 'react'

const Exercise = ({ name, muscle, backgroundColor, onClick }) => {
    return (
        <div className="flex flex-col font-normal text-sm w-full shadow text-center cursor-pointer" onClick={onClick}>
            <div className="w-full flex items-center justify-center" style={{ backgroundColor }}><img src={require(`../../Assets/${muscle.toLowerCase()}.svg`).default} className="w-20" alt="exercise_image" /> </div>
            <div className="text-white bg-orange h-12 flex items-center text-xs justify-center p-1">{name}</div>
        </div>
    )
}

export default Exercise;
