import React from "react";
import "@babel/polyfill";
import "@testing-library/jest-dom";
import {
    fireEvent, render, screen, waitFor, act,
} from "@testing-library/react";
import { Provider } from 'react-redux'
import AuthForm from "./AuthForm";
import { configureStore } from '@reduxjs/toolkit'
import { expect } from "@jest/globals";
import { auth } from "../../../../store/reducers"
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { BACKEND_URL } from "../../../../constants";
import * as redux from "react-redux";

const mock = new MockAdapter(axios);
const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 

const renderComponent = ({ preloadedState } = {}) => {
    render(
        <Provider store={configureStore({ reducer: { auth }, preloadedState })}>
            <AuthForm />
        </Provider>
    );
};

describe("<AuthForm/>", () => {
    it("Renders correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("form__container")).toBeInTheDocument());
    });

    it("Switches the form from signup to login correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("input__username")).toBeInTheDocument());

        act(() => { fireEvent.click(screen.getByTestId("auth-form__switcher"))});

        await waitFor(() => expect(screen.queryByTestId("input__username")).not.toBeInTheDocument());
    })

    it("Dispatches an action on successful login", async () => {
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        
        mock.onPost(`${BACKEND_URL}/login`).reply(200, {
                success: true,
                id: "1",
                jwt: "2",
          });

        renderComponent({preloadedState: { auth: {authenticationStatus: "LOGIN"} }});

        const emailInput = screen.getByTestId("input__email").querySelector('input');
        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.change(emailInput, { target: { value: "a@b.c"}})});
        act(() => { fireEvent.change(passwordInput, { target: { value: "hdajskhdajksdhdkjwhkjdhjdks"}})});

        act(() => { fireEvent.click(screen.getByRole("button", {name: "LOG IN"}))});

        await waitFor(() => expect(mockDispatchFn).toBeCalled())
    })

    it("Dispatches an action on failed login", async () => {
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        
        mock.onPost(`${BACKEND_URL}/login`).reply(424, {
                data: {
                    error: true
                }
          });

        renderComponent({preloadedState: { auth: {authenticationStatus: "LOGIN"} }});

        const emailInput = screen.getByTestId("input__email").querySelector('input');
        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.change(emailInput, { target: { value: "a@b.c"}})});
        act(() => { fireEvent.change(passwordInput, { target: { value: "hdajskhdajksdhdkjwhkjdhjdks"}})});

        act(() => { fireEvent.click(screen.getByRole("button", {name: "LOG IN"}))});

        await waitFor(() => expect(mockDispatchFn).toBeCalled())
    })

});
