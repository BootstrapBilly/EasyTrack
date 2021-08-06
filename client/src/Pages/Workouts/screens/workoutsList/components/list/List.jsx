import React from 'react'
import { Portal } from "../../../../../../components";
import { Thumbnail } from '../thumbnail';

const List = ({ workouts }) => {
    return (
        <div className="overflow-y-auto h-full shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-content-start place-items-center">
            {workouts.map(({name, exercises}) => <Portal name={name} className="mt-4" 
            // component={<Thumbnail exercises={exercises} />} 
            onClick={() => {}} />)}
        </div>
    )
}

export default List;

