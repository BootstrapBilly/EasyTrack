import React, { useRef } from 'react'
import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../../../../../components';
import { setBackendErrors, switchAuthenticationStatus } from '../../../../../../store/actions';
import { generate2facode, verify2facode } from '../../../../requests';
import { Button } from "../../../../../../components";

const { AUTHENTICATED } = switchAuthenticationStatus;

const Verify2fa = ({handleNoThanks}) => {
    const { userId, backendErrors } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const inputs = [...Array(6).keys()];
    const inputRefs = useRef([]);

    const resetForm = () => {
        inputRefs.current.forEach((cell, index) => {
            if(index === 0){
                cell.focus();
            }
            cell.value = ""
        })
        dispatch(setBackendErrors([]));
    }

    const onSubmit = async (code) => {
        try {
            const { data } = await verify2facode({code, userId});
            if(data.success) { 
                dispatch(switchAuthenticationStatus({status: AUTHENTICATED }))
                dispatch(setBackendErrors([]));
            }
        } catch ({ response: { data } }) {
            resetForm();
            
            if(data.resend){ await generate2facode({userId}) }
            
            return dispatch(setBackendErrors([
                { name: "0", message: "" }, { name: "1", message: "" }, { name: "2", message: "" }, 
                { name: "3", message: "" }, { name: "4", message: "" }, { name: "5", message: "" }, 
                { name: "noField", message: data.message }]));
        }
      };

      const onResend = throttle(async () => {
        try {
            await generate2facode({userId});
            dispatch(setBackendErrors([]));
        } catch ({ response: { data } }) {
           console.log(data);
        }
      }, 30000)

    const onChange = (e, index) => {
        if(
            e.code 
            && e.code !== "Backspace"
            && inputRefs.current[index].value
        ){
            const next = inputRefs.current[index + 1];

            if (next) { next.focus() }
        }
    };
   
    return (
        <Form onSubmit={onSubmit} className="w-full mt-2" customErrors={backendErrors}>
            <div className="my-2 p-1">
                <div>A verification code was just sent to your mobile number</div>
                <div className="w-full flex justify-between items-center">
                <div className="mt-2">Enter it below</div>
                    <div className="w-1/4 mt-1"><Button variant="danger-outline" size="sm" onClick={resetForm}>Reset</Button></div>
                </div>
            </div>
            <div className="flex mt-3">
                {inputs.map((_, index) => {
                    return <Form.Input 
                                name={index.toString()} 
                                maxLength={1} 
                                className="m-1" 
                                key={index.toString()} 
                                reference={el => inputRefs.current[index] = el} 
                                canHaveNoFieldError
                                onKeyUp={(e) => onChange(e, index)}
                            />
                })}
            </div>
            <Form.Error className="px-2 mt-1" />
            <Form.Submit text="Verify" className="mt-4 mb-3"/>
            <Button variant="danger" onClick={handleNoThanks}>No Thanks</Button>
            <button type="button" className="text-grey-medium mt-6" onClick={onResend}>Didn't receive a code? Tap here to resend it</button>
        </Form>
    )
}

export default Verify2fa;

    