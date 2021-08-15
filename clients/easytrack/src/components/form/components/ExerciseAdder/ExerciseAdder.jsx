import React, { useState, useEffect } from 'react';
import { startCase } from 'lodash';
import { Exercise } from '../../../exercise';
import { Button } from '../../../button';
import { useLazyQuery, gql } from '@apollo/client';

const ExerciseAdder = ({ onClick, buttonText, buttonWrapperClassName, exerciseContainerClassName }) => {
    const [availableExercises, setAvailableExercises] = useState([])
    const [selectedExercises, setSelectedExercises] = useState([]);

        const [getExercises] = useLazyQuery(
        gql`
        query Query {
        CHEST: getExercises(filter: {muscle: CHEST }) {
            id
            name
            muscle
        }
        BACK: getExercises(filter: {muscle: BACK }) {
            id
            name
            muscle
        }
        SHOULDERS: getExercises(filter: {muscle: SHOULDERS }) {
            id
            name
            muscle
        }
        BICEPS: getExercises(filter: {muscle: BICEPS }) {
            id
            name
            muscle
        }
        TRICEPS: getExercises(filter: {muscle: TRICEPS }) {
            id
            name
            muscle
        }
        GLUTES: getExercises(filter: {muscle: GLUTES }) {
            id
            name
            muscle
        }
        HAMSTRINGS: getExercises(filter: {muscle: HAMSTRINGS }) {
            id
            name
            muscle
        }
        CALFS: getExercises(filter: {muscle: CALFS }) {
            id
            name
            muscle
        }
        COMPOUND: getExercises(filter: {muscle: COMPOUND }) {
            id
            name
            muscle
        }
        }
    `, {
        onCompleted: (exercises) => {
            setAvailableExercises(Object.entries(exercises));
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });

    const getAvailableExcercises = async () => {
        await getExercises();
    }

    const filterSelectedExercises = (exercises, isSelected) => {
        return exercises.reduce((result, item) => {
            if(!selectedExercises.find((exercise) => exercise.id === item.id) || isSelected){
                result.push(item)
            }
            return result;
       }, []);
    }

    const handleClickExercise = (exercise) => {
        if(selectedExercises.find((selectedExercise) => exercise.id === selectedExercise.id)){
            setSelectedExercises([...selectedExercises.filter((selectedExercise) => selectedExercise.id !== exercise.id)])
        }

        else { setSelectedExercises([...selectedExercises, exercise])}
    }

    useEffect(() => { getAvailableExcercises()}, [])

    return (
        <div className="h-full">
           <div className={`flex flex-col border border-grey-light p-2 shadow overflow-y-auto h-70% ${exerciseContainerClassName}`}>
               {[["SELECTED", selectedExercises ], ...availableExercises].map((exercise) => {
               const [title, exercises] = exercise;

               const isSelected = title === "SELECTED";

               const filteredItems = filterSelectedExercises(exercises, isSelected);

                if(filteredItems.length){
                    return(
                        <div className="pb-1">
                            <div className={`font-bold text-xl mb-2`}>
                                {startCase(title.toLowerCase())}:
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-16 gap-1 place-content-start place-items-center">
                                {filteredItems.map((exercise) =>                                                 
                                    <Exercise 
                                        key={exercise.id} 
                                        name={exercise.name} 
                                        muscle={title} 
                                        onClick={() => handleClickExercise(exercise)}
                                        backgroundColor={isSelected && "#ACD1AF"}
                                    />
                                )}
                            </div>
                        </div>)
                }
           })}
           </div>
           <div className={`${buttonWrapperClassName}`}>
                <Button variant="brand" onClick={() => onClick(selectedExercises)}>{buttonText}</Button>
           </div>
        </div>
    )
}

export default ExerciseAdder;
