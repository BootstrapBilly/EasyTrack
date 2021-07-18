import React from 'react'
import { Button } from "../../../../../../components";

const Prompt = ({handleNo, handleYes}) => {
    return (
        <>
            <h2 className="text-2xl pb-6 text-center font-extralight py-5">
                Would you like to add an authenticator for extra security ?
            </h2>

            <span className="py-3 text-grey-medium mt-10">This can be added later</span>

            <div className="flex w-full justify-between">
                <Button variant="danger" style={{width: "47%"}} onClick={handleNo}>No</Button>
                <Button variant="success" style={{width: "47%"}} onClick={handleYes}>Yes</Button>
            </div>
        </>
    )
}

export default Prompt;
