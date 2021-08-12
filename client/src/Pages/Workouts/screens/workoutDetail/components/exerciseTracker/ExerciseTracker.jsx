import React from 'react'
import { ExerciseIconPill } from "../../../../../../components"

const ExerciseTracker = ({ exercise }) => {
    const { id, name, sessions: { items } } = exercise;

    console.log(items.length)
    return (
        <div className="h-90% w-90% shadow-lg bg-white rounded flex flex-col relative mt-2">
            <div className="w-full flex justify-center absolute -top-6"><ExerciseIconPill name={name} noShadow border="4" borderColor="background" /></div>
                <div className="h-full mt-16 mx-3 shadow-md bg-background flex flex-col overflow-hidden">
                    <div className="p-2 shadow">Title</div>
                    <div className="h-full flex flex-col overflow-auto px-2">
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                        <div>aaaaaaaaaaaa</div>
                    </div>
                </div>
            <div className="font-bold flex items-center pl-3 py-4">{name}</div>
        </div>
    )
}

export default ExerciseTracker;
