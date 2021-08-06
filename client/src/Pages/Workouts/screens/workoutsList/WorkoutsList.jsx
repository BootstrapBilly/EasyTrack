import React, { useEffect, useState } from 'react'
import { Footer, List } from './components';
import { listWorkouts } from "../../../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useSelector } from 'react-redux';

const Workouts = () => {
    const { user: { userId } } = useSelector(state => state.auth);

    const [workouts, setWorkouts] = useState([]);

    const getWorkouts = async () => {
        const { data: { listWorkouts: { items } } } = await API.graphql(graphqlOperation(listWorkouts, { filter: { createdBy: { eq: userId } } }));
        setWorkouts(items);
    }

    useEffect(() => {
        getWorkouts()
    }, [])

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <List workouts={workouts} />
            <Footer />
        </div>
    )
}

export default Workouts;

