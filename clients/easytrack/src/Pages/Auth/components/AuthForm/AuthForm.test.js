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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronLeft, faEye)

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
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Renders correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("form__container")).toBeInTheDocument());
    });

    it("Switches the form from signup to login correctly", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        await waitFor(() => expect(screen.getByTestId("input__username")).toBeInTheDocument());

        act(() => { fireEvent.click(screen.getByTestId("auth-form__switcher"))});

        await waitFor(() => expect(screen.queryByTestId("input__username")).not.toBeInTheDocument());
    })

    it("Switches the form from login to signup correctly", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "LOGIN"} }});

        await waitFor(() => expect(screen.queryByTestId("input__username")).not.toBeInTheDocument());

        act(() => { fireEvent.click(screen.getByTestId("auth-form__switcher"))});

        await waitFor(() => expect(screen.getByTestId("input__username")).toBeInTheDocument());
    })

    it("Instantly validates usernames which are too short", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const usernameInput = screen.getByTestId("input__username").querySelector('input');

        act(() => { fireEvent.change(usernameInput, { target: { value: "u"}})});
        
        await waitFor(() => expect(screen.getByText("Username must be at least 3 characters")).toBeInTheDocument())
    })

    it("Instantly validates emails which do not meet the required format", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const emailInput = screen.getByTestId("input__email").querySelector('input');

        act(() => { fireEvent.change(emailInput, { target: { value: "u"}})});
        
        await waitFor(() => expect(screen.getByText("Enter a valid email address")).toBeInTheDocument())
    })

    it("Instantly validates emails which contain spaces", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const emailInput = screen.getByTestId("input__email").querySelector('input');

        act(() => { fireEvent.change(emailInput, { target: { value: "a@b.c "}})});
        
        await waitFor(() => expect(screen.getByText("Email cannot have spaces")).toBeInTheDocument())
    })

    it("Instantly validates passwords which are too short", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.change(passwordInput, { target: { value: "short"}})});
        
        await waitFor(() => expect(screen.getByText("Password must be at least 8 characters")).toBeInTheDocument())
    })

    it("Instantly validates common passwords", async () => {
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.change(passwordInput, { target: { value: "password"}})});
        
        await waitFor(() => expect(screen.getByText("Common password, use a better one")).toBeInTheDocument())
    })

    it("Dispatches an action when the go back button is clicked", async () => {
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        
        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        await waitFor(() => expect(screen.getByTestId("auth-form__back-button")).toBeInTheDocument());

        act(() => { fireEvent.click(screen.getByTestId("auth-form__back-button"))});

        await waitFor(() => expect(mockDispatchFn).toBeCalled())
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

    it("Dispatches an action on successful signup", async () => {
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        
        mock.onPost(`${BACKEND_URL}/signup`).reply(201, {
                success: true,
                id: "1",
                jwt: "2",
          });

        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const emailInput = screen.getByTestId("input__email").querySelector('input');
        const usernameInput = screen.getByTestId("input__username").querySelector('input');
        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.change(emailInput, { target: { value: "a@b.c"}})});
        act(() => { fireEvent.change(usernameInput, { target: { value: "username"}})});
        act(() => { fireEvent.change(passwordInput, { target: { value: "hdajskhdajksdhdkjwhkjdhjdks"}})});

        act(() => { fireEvent.click(screen.getByRole("button", {name: "CREATE ACCOUNT"}))});

        await waitFor(() => expect(mockDispatchFn).toBeCalled())
    })

    it("Dispatches an action on failed signup", async () => {
        const mockDispatchFn = jest.fn()
        useDispatchSpy.mockReturnValue(mockDispatchFn);
        
        mock.onPost(`${BACKEND_URL}/signup`).reply(424, {
                data: {
                    error: true
                }
          });

        renderComponent({preloadedState: { auth: {authenticationStatus: "SIGNUP"} }});

        const emailInput = screen.getByTestId("input__email").querySelector('input');
        const usernameInput = screen.getByTestId("input__username").querySelector('input');
        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.change(emailInput, { target: { value: "a@b.c"}})});
        act(() => { fireEvent.change(usernameInput, { target: { value: "username"}})});
        act(() => { fireEvent.change(passwordInput, { target: { value: "hdajskhdajksdhdkjwhkjdhjdks"}})});

        act(() => { fireEvent.click(screen.getByRole("button", {name: "CREATE ACCOUNT"}))});

        await waitFor(() => expect(mockDispatchFn).toBeCalled())
    })

});
