import React from 'react'

const ExerciseIconPill = ({ name, noShadow, border, borderColor, backgroundColor = "", cursorPointer, onClick }) => {
    return (
        <div 
        onClick={onClick}
        className={`
            w-20 h-20 rounded-full flex items-center justify-center
            ${!noShadow && "shadow"} 
            ${border && `border-${border}`} 
            ${borderColor && `border-${borderColor}`} 
            ${backgroundColor ? `${backgroundColor}` : "bg-white"}
            ${cursorPointer && "cursor-pointer"}
        `}>
            <img src={require(`../../Assets/exercises/${name}.svg`).default} className="h-20 p-3" alt="exercise_image" />
        </div>
    )
}

export default ExerciseIconPill;
