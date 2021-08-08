import React from 'react'
import { Form } from '../../../../components';
import { checkRequiredValue as valueMissing } from "@billyjames/util-packages";

const AddWorkout = () => {
    return (
        <Form className="px-5 w-full flex flex-col justify-center">
    
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
            
            <Form.ExerciseAdder />
         
          <Form.Error className="px-2" />
    
          <div className="mt-4 flex flex-col items-center w-full">
            <Form.Submit text={"ADD WORKOUT"}
            />
          </div>
        </Form>
    )
}

export default AddWorkout;

