import React, { useState, useMemo } from 'react'
import { Form } from '../../../../components';
import { API, graphqlOperation } from "aws-amplify";
import { checkRequiredValue as valueMissing } from "@billyjames/util-packages";
import { useSelector } from 'react-redux';
import { createWorkout } from '../../../../graphql/mutations';
import { useNavigate } from '../../../../hooks';
import { WorkoutsRoutes } from "../../../../constants";

const { WORKOUTS } = WorkoutsRoutes;

const AddWorkout = () => {
    const formStates = {
        NAME: "NAME",
        ADD_EXERCISES: "ADD_EXERCISES",
    };
    const { NAME, ADD_EXERCISES } = formStates;

    const { user: { userId } } = useSelector(state => state.auth);
    const { navigateTo } = useNavigate();

    const [workoutName, setWorkoutName] = useState("");
    const [currentStep, setCurrentStep] = useState(NAME);
    
    const currentPromptMessage = useMemo(() => {
        switch (currentStep) {
            default: case NAME: return "What should this workout be called?";
            case ADD_EXERCISES: return `Select some exercises for ${workoutName}`; // @TODO SANITIZE THIS
        }
    }, [formStates, currentStep])


    const handleSubmit = async (value) => {
        if(currentStep === NAME) { 
            const name = value;
            setWorkoutName(name);
            return setCurrentStep(ADD_EXERCISES) 
        };

        const exercises = value;
        try {
            await API.graphql(graphqlOperation(createWorkout, { input: { createdBy: userId, name: workoutName, exercises } }));
            navigateTo({ location: WORKOUTS })
        } catch( err) {
            // @ todo - error handling
            console.log(err)
        }
       
    }

    return (
        <div className="flex w-full justify-center overflow-hidden">
            <Form className="px-5 w-full flex flex-col" onSubmit={({name}) => handleSubmit(name)}>
        
            <div className="text-grey-medium text-3xl mt-4 mb-8">{currentPromptMessage}</div>

                {currentStep === NAME &&           
                    <div className="flex flex-col justify-center md:w-1/2 lg:w-1/3 xl:w-5/12 2xl:w-1/4">
                        <Form.Input
                            name="name"
                            label="Name"
                            validation={{
                            custom: {
                                length1: (username) => !valueMissing({ value: username }, { length: 1 }) || "Your workout must have a name",
                            },
                            }}
                            autoComplete="off"
                        />
                        <div className="mt-8 md:w-48"><Form.Submit text={"NEXT"} /></div>
                    </div>
                }

                {currentStep === ADD_EXERCISES && <Form.ExerciseAdder
                    buttonText="ADD WORKOUT" onClick={(exercises) => handleSubmit(exercises)}
                    exerciseContainerClassName="md:max-w-80% lg:max-w-70% xl:max-w-60%"
                    buttonWrapperClassName="mt-4 md:mt-4 md:w-48"
                />}      
        
            </Form>
        </div>
    )
}

export default AddWorkout;

