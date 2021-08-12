/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { getWorkout, listSessions } from '../../../../graphql/queries';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ExerciseTracker } from './components';
import { ExerciseIconPill } from '../../../../components';

const WorkoutDetail = () => {
    const { user: { userId } } = useSelector(state => state.auth);

    const [exercises, setExercises] = useState([]);
    const [sessionsAdded, setSessionsAdded] = useState(false);
    const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(0);

    const { id } = useParams();

    const getWorkoutQuery = async () => {
        try{
            const { data: { workout: { exercises } } } = await API.graphql(graphqlOperation(getWorkout, { id }));
        
            setExercises(exercises);
        }
        catch(e) {
            console.log(e)
        }
    }

    const getSessionsQuery = async ({ exerciseId }) => {
        try{
            const { data: { sessions } } = await API.graphql(graphqlOperation(listSessions, { filter: {createdBy: {eq: userId }, exerciseId: {eq: exerciseId }} }));

            const exerciseWithSessionHistory = exercises.reduce((acc, exercise) => {
                if(exercise.id === exerciseId) {
                    acc.push({...exercise, sessions})
                }
                return acc;
            }, [])
            
           return exerciseWithSessionHistory[0];
        }
        catch(e) {
            console.log(e)
        }
    }

    const addSessionHistoryToExercises = () => {
        const exercisesWithSessionHistory = [];
        let sortedExercisesWithSessionHistory = [];

        let count = 0;

        exercises?.forEach(async ({id}, index) => {
            const result = await getSessionsQuery({ exerciseId:id });
            
            exercisesWithSessionHistory.push({result, index});
            sortedExercisesWithSessionHistory.push({});
            count ++;
  
            if(count === exercises.length) {
       
                exercisesWithSessionHistory.forEach(({result, index}) => {
                    sortedExercisesWithSessionHistory[index] = result;
                })
  
                setExercises(sortedExercisesWithSessionHistory);
                setSessionsAdded(true);
            }
        })

    }
 
    useEffect(() => {
        if(exercises?.length) { addSessionHistoryToExercises() }
    }, [exercises.length])

    useEffect(getWorkoutQuery, []);

    return (
        <>
            {sessionsAdded && (
                <div className="h-full w-full flex flex-col items-center overflow-hidden">
                    <div className="h-full w-full overflow-hidden flex items-center justify-center">
                        <ExerciseTracker exercise={exercises[selectedExerciseIndex]} />
                    </div>
                    <div className="bg-white w-full h-36 flex overflow-x-auto items-center justify-center">
                        {exercises.map(({name}, index) => 
                            <div className="ml-4">
                                <ExerciseIconPill name={name} backgroundColor={selectedExerciseIndex === index ? "bg-brand" : "bg-grey-light"} cursorPointer onClick={() => setSelectedExerciseIndex(index)}/>
                            </div>)}
                    </div>
                </div>
            )}
        </>
    )
}

export default WorkoutDetail;