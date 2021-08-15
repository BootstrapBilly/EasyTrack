import React, { useEffect, useState } from 'react'
import { ExerciseIconPill } from "../../../../../../components"
import Weight from "../../../../../../Assets/weight.svg";
import WeightGrey from "../../../../../../Assets/weight-grey.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExerciseTracker = ({ exercise }) => {
    const {  name
    } = exercise;

    const [numSetsInSessions, setNumSetsInSessions] = useState([]);
    const [newSets, setNewSets] = useState({});
    const [newWeightAdded, setNewWeightAdded] = useState(null);
    const [newRepsAdded, setNewRepsAdded] = useState(null);

    // console.log(items)

//     const name = "Incline bench press"
//     const items = [
//     {
//         "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a4",
//         "sets": [
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             }
//         ]
//     },
//     {
//         "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a1",
//         "sets": [
//             {
//                 "weight": 24,
//                 "reps": 8
//             },
//             {
//                 "weight": 24,
//                 "reps": 2
//             },
//             {
//                 "weight": 24,
//                 "reps": 3
//             },
//             {
//                 "weight": 24,
//                 "reps": 5
//             },
//             {
//                 "weight": 24,
//                 "reps": 2
//             }
//         ]
//     },
//     {
//         "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a9",
//         "sets": [
//             {
//                 "weight": 999,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             }
//         ]
//     },
//     {
//         "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a2",
//         "sets": [
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             }
//         ]
//     },
//     {
//         "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a5",
//         "sets": [
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             }
//         ]
//     },
//     {
//         "id": "ca30c73d-8833-4c07-a936-9058e6d5a193",
//         "sets": [
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             }
//         ]
//     },
//     {
//         "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a3",
//         "sets": [
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             },
//             {
//                 "weight": 24,
//                 "reps": 10
//             }
//         ]
//     }
// ]

//     useEffect(() => {
//         const setLengths = items.reduce((acc, { sets }) => {
//             acc.push(sets.length);
//             return acc;
//         }, [])

//         const setIds = items.reduce((acc, { id }) => {
//             acc.push({sessionId: id});
//             return acc;
//         }, [])
        
//         setNumSetsInSessions(setLengths);
//         setNewSets(setIds);
//     }, [])

//     console.log(newSets);

//     const handleUpdateSet = async ({value, sessionId, sets, index, type}) => {
//         const oldValue = sets[index][type];
//         const valueChanged = oldValue.toString() !== value.toString();

//         if(valueChanged) {
//             sets[index][type] = parseInt(value);
//             try {
//                 await API.graphql(graphqlOperation(updateSession, { input: { id: sessionId, sets } }));
//             } catch (e) {
//                 console.log(e);
//             }
//         }
//     }

//     const handleAddNewSet = async ({value, sessionId, sets, type, sessionIndex}) => {
//     //     if(value) {
//     //         const session = newSets.find((sessionId) => sessionId);
//     //         if(!session.newSet) {
//     //             const clone = newSets;
//     //             clone[sessionIndex] = { sessionId, sets: [...sets, // insert new set
//     //               }
//     //             setNewSets()
//     //         }
//     //         console.log(session)
//     //         // const setLength = numSetsInSessions[sessionIndex]
//     //         // sets[setLength] = {[type]: value}
//     //         // try {
//     //         //     await API.graphql(graphqlOperation(updateSession, { input: { id: sessionId, sets } }));
//     //         // } catch (e) {
//     //         //     console.log(e);
//     //         // }
//     //     }
//     // }
// }
    

    return (
        <div className="h-90% w-90% shadow-lg bg-white rounded flex flex-col relative mt-2">
            <div className="w-full flex justify-center absolute -top-6"><ExerciseIconPill name={name} noShadow border="4" borderColor="background" /></div>
                <div className="h-full mt-16 mx-3 shadow-md bg-background flex flex-col overflow-hidden">
                    <div className="flex flex-col overflow-y-auto overflow-x-hidden px-2 py-2">

                    </div>
                </div>
            <div className="font-bold flex items-center pl-3 py-4">{name}</div>
        </div>
    )
}

export default ExerciseTracker;
