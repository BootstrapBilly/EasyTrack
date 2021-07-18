import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from "../../../../../../components";
import { switchAuthenticationStatus } from '../../../../../../store/actions';
import { AuthenticationStatus } from "../../../../../../constants";

const { COLLECT2FAPHONENUMBER } = AuthenticationStatus;

const Offer2fa = ({handleNoThanks}) => {
    const dispatch = useDispatch();

    const handleYes = () => dispatch(switchAuthenticationStatus({ status: COLLECT2FAPHONENUMBER }))
    return (
        <>
            <h2 className="text-2xl pb-6 text-center font-extralight py-5">
                Would you like to add an authenticator for extra security ?
            </h2>

            <span className="py-3 text-grey-medium mt-10">This can be added later</span>

            <div className="flex w-full justify-between">
                <Button variant="danger" style={{width: "47%"}} onClick={handleNoThanks}>No</Button>
                <Button variant="success" style={{width: "47%"}} onClick={handleYes}>Yes</Button>
            </div>
        </>
    )
}

export default Offer2fa;
