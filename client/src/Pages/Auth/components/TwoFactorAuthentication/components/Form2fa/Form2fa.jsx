import React from 'react'
import { Form } from "../../../../../../components";
import { Button } from "../../../../../../components";
import { validatePhoneNumber as invalidPhoneNumber } from "@billyjames/util-packages";
import { generate2facode } from '../../../../requests';

const Form2fa = ({handleNo}) => {
    const onSubmit = async (formData) => {
        try {
            const a = await generate2facode(formData);
          console.log(a);
          //dispatch(loginSuccess(data));
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
            />
            <div className="mt-4"><Form.Submit text="SECURE MY ACCOUNT" /></div>
            </div>
            <div className="flex flex-col pt-6 pb-2 px-2">
                <span>A code will be sent to your phone when you attempt to log in.</span>
                <span className="mt-2">The code will ensure that <b>you</b> and no one else is trying to log in.</span>
                <div className="w-1/2 self-center mt-6"><Button variant="danger" onClick={handleNo}>NO THANKS</Button></div>
            </div>
        </Form>
    )
}

export default Form2fa;
