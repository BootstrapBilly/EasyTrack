import React from 'react'
import ExerciseIconPill from '../exerciseIconPill/ExerciseIconPill';

const ExerciseIconPillCollection = ({ exercises }) => {

    const firstSixExercises = exercises.slice(0,6);

    return (
        <div className="grid grid-cols-3 h-full place-content-evenly place-items-center">
            {firstSixExercises.map(({name}) => <ExerciseIconPill name={name}/>)}
        </div>
    )
}

export default ExerciseIconPillCollection;

