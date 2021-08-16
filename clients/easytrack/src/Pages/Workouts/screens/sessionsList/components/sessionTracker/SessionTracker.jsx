import React, { useEffect, useState } from 'react'
import { Button, ExerciseIconPill } from "../../../../../../components"
import Weight from "../../../../../../Assets/weight.svg";
import WeightGrey from "../../../../../../Assets/weight-grey.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    GET_SESSIONS_QUERY, 
    CREATE_SESSION_MUTATION,
    DELETE_SESSION, 
    ADD_SET_TO_SESSION, 
    UPDATE_SET 
} from "@billyjames/graphql-queries";
import { useLazyQuery, useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';


const SessionTracker = ({ exercise }) => {
    const { user: { userId } } = useSelector(state => state.auth);
    const { name, id: exerciseId } = exercise;
    
    const [sessions, setSessions] = useState([]);

    const [getSessions] = useLazyQuery(GET_SESSIONS_QUERY,{
        variables: {
            getSessionsFilter: {
                exerciseId,
                createdBy: userId
            },
        },
        fetchPolicy: "no-cache",
        onCompleted: ({ sessions }) => {
            setSessions(sessions);
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });

    const [createSession] = useMutation(CREATE_SESSION_MUTATION,{
        variables: {
            createSessionInput: {
                exerciseId,
                createdBy: userId
            },
        },
        fetchPolicy: "no-cache",
        onCompleted: ({ session }) => {
            console.log(session)
            setSessions([...sessions, session])
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });

    const [deleteSession] = useMutation(DELETE_SESSION,{
        onCompleted: ({ session: { id } }) => {
            setSessions([...sessions.filter((session) => session.id !== id)])
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });

    const [addSetToSession] = useMutation(ADD_SET_TO_SESSION, {
        onCompleted: ({ session: updatedSession }) => {
            setSessions(sessions.map(session => session.id === updatedSession.id ? updatedSession : session))
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });

    const [updateSet] = useMutation(UPDATE_SET, {
        onCompleted: ({ session: updatedSession }) => {
            console.log(updatedSession);
            // setSessions(sessions.map(session => session.id === updatedSession.id ? updatedSession : session))
        },
        onError: ({ graphQLErrors, networkError }) => {
            // @todo handle errors
        },
    });
    

    useEffect(getSessions, [])

    console.log(sessions);
    return (
        <div className="h-90% w-90% shadow-lg bg-white rounded flex flex-col relative mt-2">
            <div className="w-full flex justify-center absolute -top-6"><ExerciseIconPill name={name} noShadow border="4" borderColor="background" /></div>
                <div className="h-full mt-16 mx-3 shadow-md bg-background flex flex-col overflow-hidden">
                    <div className="flex flex-col overflow-y-auto overflow-x-hidden px-2 py-2">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-64 mt-2">
                                <Button variant="success" size="md" onClick={createSession}>Add new session</Button>
                            </div>
                        </div>
                        {sessions.map(({id: sessionId, sets}, sessionIndex) => 
                            // session row
                            <div className="mt-2 flex">
                            {/* Icon container */}
                            <div className="pr-1 flex-shrink-0 flex items-end mb-1 justify-center">
                                <FontAwesomeIcon
                                    data-testid="input__show-password"
                                    icon="trash-alt"
                                    className="text-lg text-red"
                                    onClick={() => deleteSession({
                                        variables: {
                                            deleteSessionId: sessionId,
                                        },
                                    })}
                                />
                            </div>
                            {/* scrollable row */}
                            <div className="flex mt-1 relative overflow-x-auto">
                                {sets.map(({weight, reps}, index) => 
                                // sets
                                <div>
                                    {/* Top row */}
                                    <div className="flex mx-1">
                                        <div className="flex items-center justify-center w-10">
                                            <img src={Weight} className="h-7" alt="Weight icon - made by freepik" longdesc="https://www.flaticon.com/"/>
                                        </div>
                                        <div className="flex items-center justify-center w-10 text-3xl">R</div>
                                    </div>
                                    {/* Bottom row */}
                                    <div className="flex mt-1 text-xl mx-1 w-20 justify-evenly">
                                        <input className="w-9 bg-white shadow text-center" defaultValue={weight}
                                            onBlur={({target:{ value }}) => {
                                                if(value){
                                                    updateSet({
                                                        variables: {
                                                            updateSetInput: { value, sessionId, index, type: "weight" }
                                                        }
                                                    })
                                                }
                                            }}
                                        />
                                        <input className="w-9 bg-white shadow text-center" defaultValue={reps}                           
                                            onBlur={({target:{ value }}) => {
                                                if(value) {
                                                    updateSet({
                                                        variables: {
                                                            updateSetInput: { value, sessionId, index, type: "reps" }
                                                        }
                                                    })
                                                }
                                            }}
                                        />
                                    </div>
                                </div>)}
                                <div className="h-full w-full relative -top-1 ml-1 flex items-end justify-center">
                                    <FontAwesomeIcon
                                        data-testid="input__show-password"
                                        icon="plus"
                                        className="text-lg text-green"
                                        onClick={() => addSetToSession({
                                            variables: {
                                                addSetToSessionId: sessionId,
                                            },
                                        })}
                                    /> 
                                </div>
                            </div>
                            </div>)}
                    </div>
                </div>
            <div className="font-bold flex items-center pl-3 py-4">{name}</div>
        </div>
    )
}

export default SessionTracker;
