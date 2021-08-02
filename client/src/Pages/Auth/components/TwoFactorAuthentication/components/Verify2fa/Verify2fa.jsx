import React, { useState } from 'react'
import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../../../../../components';
import { setBackendErrors, switchAuthenticationStatus } from '../../../../../../store/actions';
import { Button } from "../../../../../../components";
import { useAuthenticatedRequest } from '../../../../../../hooks';
import VerificationInput from "react-verification-input";

const { AUTHENTICATED } = switchAuthenticationStatus;

const Verify2fa = ({handleNoThanks}) => {
    const [SMScode, setSMScode] = useState("");
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const { sendRequest } = useAuthenticatedRequest();

    const resetForm = () => {
        setSMScode("");
        setError("");
    }

    const onSubmit = async () => {
        try {
            const { data } = await sendRequest("verify2facode", { code: SMScode })
            if(data.success) { 
                dispatch(switchAuthenticationStatus({status: AUTHENTICATED }))
                setError("");
            }
        } catch ({ response: { data } }) {
            resetForm();
            
            if(data.resend){ await sendRequest("generate2facode", {code: SMScode})}

            return setError(data.message);
            
        }
      };

      const onResend = throttle(async () => {
        try {
            await sendRequest("generate2facode", {})
            setError("");
        } catch ({ response: { data } }) {
            // @ todo error handling
           console.log(data);
        }
      }, 30000)

      const onChange = (v) => {
        setSMScode(v);

        if(error && v?.length){
            setError("");
        }
      }
   
    return (
        <>
            <div className="my-2 p-1 w-full flex justify-center">
                <div className="flex flex-col items-center md:w-1/2 xl:w-1/3">
                    <div>A verification code was just sent to your mobile number</div>
                    <div className="flex flex-col items-center mt-3 md:py-6">
                        <div className="w-full flex justify-between">
                            <div className="mt-2 text-grey-medium ml-1">Enter it below</div>
                            <div className="w-1/4 mt-1"><Button variant="danger-outline" size="sm" onClick={resetForm}>Reset</Button></div>
                        </div>
                        <div className="flex mt-3">
                        <VerificationInput value={SMScode} onChange={onChange} removeDefaultStyles classNames={{character: `border ${error && "border-red"} text-brand p-2 w-10 ml-1`, characterSelected: "bg-grey-light"}} />
                        </div>
                    </div>
                    <div className="text-red mt-1">{error}</div>
                    <Button variant="brand" className="mt-4 mb-3" onClick={onSubmit}>Verify</Button>
                    <Button variant="danger" onClick={handleNoThanks}>No Thanks</Button>
                    <button type="button" className="text-grey-medium mt-6" onClick={onResend}>Didn't receive a code? Tap here to resend it</button>
                </div>
            </div>
        </>
    )
}

export default Verify2fa;

    