import React, { useEffect, useState } from 'react'
import { List } from './components';
import { useSelector } from 'react-redux';
import { Button } from '../../../../components';
import { useNavigate } from '../../../../hooks';
import { WorkoutsRoutes } from "../../../../constants";
import { useLazyQuery } from '@apollo/client';
import { GET_WORKOUTS_QUERY } from "@billyjames/graphql-queries";

const { ADD_WORKOUT } = WorkoutsRoutes;

const Workouts = () => {
    const { navigateTo } = useNavigate();  
    const { user: { userId } } = useSelector(state => state.auth);

    const [workouts, setWorkouts] = useState([]);

    const [getWorkouts] = useLazyQuery(GET_WORKOUTS_QUERY, {
        variables: {
            getWorkoutsCreatedBy: userId,
        },
        fetchPolicy: "no-cache",
        onCompleted: ({workouts}) => {
            setWorkouts(workouts);
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });
    
    const openAddNewForm = () => {
        navigateTo({ location: ADD_WORKOUT });
    }

    const fetchWorkouts = async () => await getWorkouts();
    useEffect(() => {
        fetchWorkouts()
    }, [])

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="flex justify-end pb-4 pr-4">                   
                <div className="w-32"><Button variant="success" size="md" onClick={openAddNewForm}>Add New</Button></div>
            </div>
            <List workouts={workouts} />
        </div>
    )
}

export default Workouts;

