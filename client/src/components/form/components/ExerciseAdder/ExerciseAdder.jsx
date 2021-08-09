import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { listExercisesByMuscle } from '../../../../graphql/queries';
import { startCase } from 'lodash';
import { Exercise } from '../../../exercise';
import { Button } from '../../../button';

const ExerciseAdder = ({ onClick, buttonText, buttonWrapperClassName, exerciseContainerClassName }) => {
    const [availableExercises, setAvailableExercises] = useState([])
    const [selectedExercises, setSelectedExercises] = useState([]);

    const getAvailableExcercises = async () => {
        const { data } = await API.graphql(graphqlOperation(listExercisesByMuscle));
        setAvailableExercises(Object.entries(data))
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
               {[["SELECTED", { items: selectedExercises }], ...availableExercises].map((exercise) => {
               const [title, exercises] = exercise;
               const { items } = exercises;

               const isSelected = title === "SELECTED";

               const filteredItems = filterSelectedExercises(items, isSelected);

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
