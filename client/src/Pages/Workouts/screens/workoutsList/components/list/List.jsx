import React, { useMemo } from 'react'
import { NoData, Portal } from "../../../../../../components";

const List = ({ workouts }) => {

    const noWorkouts = useMemo(() => !workouts?.length, [workouts])

    return (
        <div className={`${noWorkouts ? "flex items-center justify-center" : "grid"} overflow-y-auto h-full shadow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-content-start place-items-center`}>

            {noWorkouts &&  <NoData message="You have no workouts yet." hint="You can add one with the button at the top." />}

            {workouts.map(({name, exercises}) => <Portal name={name} className="mt-4" 
            // component={<Thumbnail exercises={exercises} />} 
            onClick={() => {}} />)}
            
        </div>
    )
}

export default List;

