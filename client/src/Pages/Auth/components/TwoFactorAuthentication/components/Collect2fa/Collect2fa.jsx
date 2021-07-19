import React from 'react'
import { Form } from "../../../../../../components";
import { Button } from "../../../../../../components";
import { validatePhoneNumber as invalidPhoneNumber } from "@billyjames/util-packages";
import { generate2facode } from '../../../../requests';
import { useDispatch, useSelector } from 'react-redux';
import { switchAuthenticationStatus } from '../../../../../../store/actions/auth-actions';
import { AuthenticationStatus } from '../../../../../../constants';

const { VERIFY2FA } = AuthenticationStatus;

const Collect2fa = ({handleNoThanks}) => {
    const dispatch = useDispatch();
    const { userId } = useSelector((state) => state.auth);

    const onSubmit = async ({phoneNumber}) => {
        try {
            const { data } = await generate2facode({userId, phoneNumber});
            if(data.success) { dispatch(switchAuthenticationStatus({status: VERIFY2FA }))}
        } catch ({ response: { data } }) {
            console.log(data)
         // dispatch(setBackendErrors([{ name: "email", message: "" }, { name: "password", message: "" }, { name: "noField", message: data.message }]));
        }
      };

    return (
        <Form onSubmit={onSubmit} className="w-full mt-2">
            <div className="mt-4">
            <div className="text-sm p-1 mb-2 text-grey-medium">*UK numbers supported</div>
            <Form.Input
                name="phoneNumber"
                label="Phone number"
                type="number"
                validation={{
                    validate: {
                        validUkNumber: (v) => !invalidPhoneNumber(v) || "Enter a valid phone number"
                    }
                }}
                className="mb-2"
            />
            <div className="mt-4"><Form.Submit text="SECURE MY ACCOUNT" /></div>
            </div>
            <div className="flex flex-col pt-6 pb-2 px-2">
                <span>A code will be sent to your phone when you attempt to log in.</span>
                <span className="mt-2">The code will ensure that <b>you</b> and no one else is trying to log in.</span>
                <div className="mt-6"><Button variant="danger" onClick={handleNoThanks}>NO THANKS</Button></div>
            </div>
        </Form>
    )
}

export default Collect2fa;
