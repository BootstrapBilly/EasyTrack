import React from 'react'

const ExerciseIconPill = ({ name, noShadow, border, borderColor }) => {
    return (
        <div className={`bg-white ${!noShadow && "shadow"} ${border && `border-${border}`} ${borderColor && `border-${borderColor}`} w-20 h-20 rounded-full flex items-center justify-center`}><img src={require(`../../Assets/exercises/${name}.svg`).default} className="h-20 p-3" alt="exercise_image" /></div>
    )
}

export default ExerciseIconPill;
