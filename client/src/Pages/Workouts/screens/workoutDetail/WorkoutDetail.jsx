/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { getWorkout, listSessions } from '../../../../graphql/queries';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WorkoutDetail = () => {
    const { user: { userId } } = useSelector(state => state.auth);
    const [exercises, setExercises] = useState([]);
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
        let count = 0;

        exercises?.forEach(async ({id}, index) => {
            const result = await getSessionsQuery({ exerciseId:id })
            exercisesWithSessionHistory.push(result);
            count ++;
            
            if(count === exercises.length) {
                setExercises(exercisesWithSessionHistory);
            }
        })

    }
 
    useEffect(() => {
        if(exercises?.length) { addSessionHistoryToExercises() }
    }, [exercises.length])

    useEffect(getWorkoutQuery, []);

    return (
        <div className="h-full overflow-y-auto">

        </div>
    )
}

export default WorkoutDetail;