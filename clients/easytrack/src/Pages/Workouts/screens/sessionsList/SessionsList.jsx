import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SessionTracker } from './components';
import { ExerciseIconPill } from '../../../../components';
import { useLazyQuery } from '@apollo/client';
import { GET_WORKOUT_QUERY } from "@billyjames/graphql-queries";

const SessionsList = () => {

    const [exercises, setExercises] = useState([]);
    const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(0);

    const { id } = useParams();

    const [getWorkout] = useLazyQuery(GET_WORKOUT_QUERY,{
        variables: {
            getWorkoutId: id,
        },
        fetchPolicy: "no-cache",
        onCompleted: ({workout}) => {
            setExercises(workout.exercises);
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });
 
    useEffect(getWorkout, []);

    return (
        <>
            {exercises.length && (
                <div className="h-full w-full flex flex-col items-center overflow-hidden">
                    <div className="h-full w-full overflow-hidden flex items-center justify-center">
                        <SessionTracker exercise={exercises[selectedExerciseIndex]} />
                    </div>
                    <div className="bg-white w-full h-36 flex overflow-x-auto items-center">
                        {exercises.map(({name}, index) => 
                            <div className="ml-4">
                                <ExerciseIconPill 
                                    name={name} 
                                    backgroundColor={selectedExerciseIndex === index ? "bg-brand" : "bg-grey-light"} 
                                    cursorPointer 
                                    onClick={() => setSelectedExerciseIndex(index)}
                                />
                            </div>)}
                    </div>
                </div>
            )}
        </>
    )
}

export default SessionsList;