import React, { useEffect, useState } from 'react'
import { Footer, List } from './components';
import { listWorkouts } from "../../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useSelector } from 'react-redux';
import { useNavigate } from '../../../../hooks';
import { WorkoutsRoutes } from "../../../../constants";

const { ADD_WORKOUT } = WorkoutsRoutes;

const Workouts = () => {
    const { user: { userId } } = useSelector(state => state.auth);
    const { navigateTo } = useNavigate();

    const [workouts, setWorkouts] = useState([]);

    const getWorkouts = async () => {
        const { data: { listWorkouts: { items } } } = await API.graphql(graphqlOperation(listWorkouts, { filter: { createdBy: { eq: userId } } }));
        setWorkouts(items);
    }
    
    const openAddNewForm = () => {
        navigateTo({ location: ADD_WORKOUT });
    }

    useEffect(() => {
        getWorkouts()
    }, [])

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <List workouts={workouts} />
            <Footer onClick={openAddNewForm}/>
        </div>
    )
}

export default Workouts;

