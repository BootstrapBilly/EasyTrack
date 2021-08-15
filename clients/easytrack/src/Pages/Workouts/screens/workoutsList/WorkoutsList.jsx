import React, { useEffect, useState } from 'react'
import { List } from './components';
import { listWorkouts } from "../../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useSelector } from 'react-redux';
import { Button } from '../../../../components';
import { useNavigate } from '../../../../hooks';
import { WorkoutsRoutes } from "../../../../constants";

const { ADD_WORKOUT } = WorkoutsRoutes;

const Workouts = () => {
    const { navigateTo } = useNavigate();  
    const { user: { userId } } = useSelector(state => state.auth);

    const [workouts, setWorkouts] = useState([]);

    const getWorkouts = async () => {
        try {
            const { data: { listWorkouts: { items } } } = await API.graphql(graphqlOperation(listWorkouts, { filter: { createdBy: { eq: userId } } }));
            setWorkouts(items);
        } catch(e) {
            console.log(e);
        }
    }
    
    const openAddNewForm = () => {
        navigateTo({ location: ADD_WORKOUT });
    }

    useEffect(() => {
        getWorkouts()
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

