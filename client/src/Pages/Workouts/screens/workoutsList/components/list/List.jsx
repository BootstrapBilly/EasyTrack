import React from 'react'
import { Portal } from "../../../../../../components";
import { Thumbnail } from '../thumbnail';

const List = ({ workouts }) => {
    return (
        <div className="flex flex-col flex-grow overflow-y-scroll shadow items-center">
            {workouts.map(({name, exercises}) => <Portal name={name} className="mt-4" 
            // component={<Thumbnail exercises={exercises} />} 
            onClick={() => {}} />)}
        </div>
    )
}

export default List;

