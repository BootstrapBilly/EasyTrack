import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { listExercisesByMuscle } from '../../../../graphql/queries';
import { startCase } from 'lodash';
import { Exercise } from '../../../exercise';
import { Button } from '../../../button';

const ExerciseAdder = ({ onClick, buttonText }) => {
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
        <div>
           <div className="flex flex-col border border-grey-light p-1 shadow overflow-y-auto max-h-96">
               {[["SELECTED", { items: selectedExercises }], ...availableExercises].map((exercise) => {
               const [title, exercises] = exercise;
               const { items } = exercises;

               const isSelected = title === "SELECTED";

               const filteredItems = filterSelectedExercises(items, isSelected);

                if(filteredItems.length){
                    return(
                        <div className="pb-1">
                            <div className={`font-bold text-xl`}>
                                {startCase(title.toLowerCase())}:
                            </div>
                            <div className="grid grid-cols-3 gap-1 place-content-start place-items-center">
                                {filteredItems.map((exercise) =>                                                 
                                    <Exercise 
                                        key={exercise.id} 
                                        name={exercise.name} 
                                        muscle={title} 
                                        onClick={() => handleClickExercise(exercise)}
                                        backgroundColor={isSelected && "#50C878"}
                                    />
                                )}
                            </div>
                        </div>)
                }
           })}
           </div>
           <Button variant="brand" className="mt-4" onClick={() => onClick(selectedExercises)}>{buttonText}</Button>
        </div>
    )
}

export default ExerciseAdder;
