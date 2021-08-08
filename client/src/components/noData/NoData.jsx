import React from 'react'
import PromptImage from "../../Assets/no-data.svg";

const NoData = ({ message, hint }) => {
    return (
        <div className="flex flex-col items-center justify-center relative px-8 h-full bottom-20">
            <img src={PromptImage} className="h-72" alt="logo" />
            <div className="mt-6">
                <div className="font-bold">{message}</div>
                <div>{hint}</div>
            </div>
        </div>
    )
}

export default NoData;

