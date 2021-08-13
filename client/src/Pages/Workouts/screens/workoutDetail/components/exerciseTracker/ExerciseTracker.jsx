import React, { useState } from 'react'
import { ExerciseIconPill } from "../../../../../../components"
import Weight from "../../../../../../Assets/weight.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExerciseTracker = ({ exercise }) => {
    // const {  name, 
    //     // sessions: { items } 
    // } = exercise;

    // console.log(items)

    const name = "Incline bench press"
    const items = [
    {
        "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a4",
        "sets": [
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            }
        ]
    },
    {
        "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a1",
        "sets": [
            {
                "weight": 24,
                "reps": 8
            },
            {
                "weight": 24,
                "reps": 2
            },
            {
                "weight": 24,
                "reps": 3
            },
            {
                "weight": 24,
                "reps": 5
            },
            {
                "weight": 24,
                "reps": 2
            }
        ]
    },
    {
        "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a9",
        "sets": [
            {
                "weight": 999,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            }
        ]
    },
    {
        "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a2",
        "sets": [
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            }
        ]
    },
    {
        "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a5",
        "sets": [
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            }
        ]
    },
    {
        "id": "ca30c73d-8833-4c07-a936-9058e6d5a193",
        "sets": [
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            }
        ]
    },
    {
        "id": "5f6a61c2-5a7d-4a48-ae30-ca402e94c7a3",
        "sets": [
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            },
            {
                "weight": 24,
                "reps": 10
            }
        ]
    }
]

 const handleInputBlur = ({value, sessionId, sets, index, type}) => {
//      console.log("\n")
// console.log(value, "val")
// console.log(sessionId, "sid")
// console.log(sets, "sets")
// console.log(index, "index")
// console.log(type, "type")

// const oldValue = sets[index][type];
// console.log(oldValue.toString() !== value.toString());
// console.log(oldValue, "old");
// console.log(value, "newval")

// console.log("\n")
 }
    return (
        <div className="h-90% w-90% shadow-lg bg-white rounded flex flex-col relative mt-2">
            <div className="w-full flex justify-center absolute -top-6"><ExerciseIconPill name={name} noShadow border="4" borderColor="background" /></div>
                <div className="h-full mt-16 mx-3 shadow-md bg-background flex flex-col overflow-hidden">
                    <div className="flex flex-col overflow-y-auto overflow-x-hidden px-2 py-2">
                        {items.length ? 
                            items.map(({id: sessionId, sets}) => 
                            // session row
                            <div className="mt-2 flex">
                            {/* Icon container */}
                            {/* <div className="pr-1 flex-shrink-0 flex items-center justify-center">
                            <FontAwesomeIcon
                                data-testid="input__show-password"
                                onClick={() => {}}
                                icon="edit"
                                className="text-2xl"
                            />
                            </div> */}
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
                                        <input className="w-9 bg-white shadow text-center" defaultValue={weight}/>
                                        <input className="w-9 bg-white shadow text-center" defaultValue={reps}/>
                                    </div>
                                </div>)}
                            </div>
                            </div>)
                        : undefined}
                        <div>a</div>
                    </div>
                </div>
            <div className="font-bold flex items-center pl-3 py-4">{name}</div>
        </div>
    )
}

export default ExerciseTracker;
