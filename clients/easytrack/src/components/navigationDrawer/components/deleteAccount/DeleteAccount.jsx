import React from 'react';
import { Form } from "../../../form";
import { Button } from '../../../button';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthenticatedRequest } from '../../../../hooks';
import { setBackendErrors, logout } from '../../../../store/actions';

const DeleteAccount = ({ handleNo }) => {
    const dispatch = useDispatch();
    const { sendRequest } = useAuthenticatedRequest();
    const { user : { userId }, backendErrors } = useSelector((state) => state.auth);

    const handleSubmit = async ({ password }) => {
        try {
            await sendRequest("delete-user", { userId, password })
            dispatch(logout());

            window.location.reload();
            
        } catch ({ response: { data } }) {
            dispatch(setBackendErrors([{ name: "password", message: data.message }]));
        }
    }

    return (
        <Form onSubmit={handleSubmit} customErrors={backendErrors}>
            <b className="text-red text-xl">Danger zone</b>
            <div className="pt-1 text-grey-medium">Are you sure ?</div>
            <Form.Input
                name="password"
                label="Password"
                type="password"
                className="mb-4 mt-6"
            />
            <Form.Error className="px-2" />

            <div className="mt-4 flex items-center w-full">
                <Button variant="brand" onClick={handleNo}>No</Button>
                <div className="px-2"></div>
                <Form.Submit text="Delete" color="#f44336"/>
            </div>

        </Form>
    )
}

export default DeleteAccount;