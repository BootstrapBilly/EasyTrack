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
        <div className="md:px-48">
            <h2 className="text-2xl pb-6 text-center font-extralight py-5">
                Would you like to add an authenticator for extra security ?
            </h2>

            <div className="text-center">
                <span className="py-3 text-grey-medium mt-10">This can be added later</span>

                <div className="flex w-full justify-between pt-4">
                    <Button variant="danger" style={{width: "90%"}} onClick={handleNoThanks}>No</Button>
                    <Button variant="success" style={{width: "90%"}} onClick={handleYes}>Yes</Button>
                </div>
            </div>
        </div>
    )
}

export default Offer2fa;
