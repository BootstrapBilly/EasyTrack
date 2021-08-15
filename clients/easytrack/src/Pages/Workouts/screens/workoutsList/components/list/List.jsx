import React, { useMemo } from 'react'
import { ExerciseIconPillCollection, NoData, Portal } from "../../../../../../components";
import { useNavigate } from '../../../../../../hooks';
import { Routes } from '../../../../../../constants';

const { WORKOUTS } = Routes;

const List = ({ workouts }) => {
    const { navigateTo } = useNavigate();
    const noWorkouts = useMemo(() => !workouts?.length, [workouts])

    return (
        <div className={`${noWorkouts ? "flex items-center justify-center" : "grid"} overflow-y-auto h-full shadow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-content-start place-items-center`}>

            {noWorkouts &&  <NoData message="You have no workouts yet." hint="You can add one with the button at the top." />}

            {workouts.map(({id, name, exercises}) => 
                <Portal 
                    name={name} 
                    className="mb-6" 
                    component={<ExerciseIconPillCollection exercises={exercises}/>} 
                    onClick={() => { navigateTo({location: `${WORKOUTS}/${id}`})}} 
                />)
            }
            
        </div>
    )
}

export default List;

