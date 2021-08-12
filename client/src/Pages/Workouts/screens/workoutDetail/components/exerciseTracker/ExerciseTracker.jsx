import React from 'react'
import { ExerciseIconPill } from "../../../../../../components"

const ExerciseTracker = ({ exercise }) => {
    const { id, name, sessions } = exercise;

    return (
        <div className="h-96 w-80 relative shadow-lg bg-white rounded flex flex-col">
            <div className="w-full flex justify-center absolute -top-12"><ExerciseIconPill name={name} noShadow border="4" borderColor="background" /></div>
            <div className="h-full border-t border-grey-light mt-8">a</div>
            <div className="h-16 border-t border-grey-light font-bold flex items-center pl-2">{name}</div>
        </div>
    )
}

export default ExerciseTracker;
