import React from "react";
import "@babel/polyfill";
import "@testing-library/jest-dom";
import {
    fireEvent, render, screen, waitFor, act,
} from "@testing-library/react";
import Form from "../../Form";
import { expect } from "@jest/globals";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(faEye, faEyeSlash)

const mockOnChange = jest.fn();

const renderComponent = ({customErrors, className, canHaveNoFieldError} = {customErrors: [], className: "", canHaveNoFieldError: true}) => {
    render(
    <Form customErrors={customErrors}>  
      <Form.Input
        name="password"
        label="Password"
        type="password"
        className={className}
        canHaveNoFieldError={canHaveNoFieldError}
        onChange={mockOnChange}
      />
      <Form.Error/>
    </Form>);
};

describe("<Input/>", () => {
    it("Renders correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("input__password")).toBeInTheDocument());
    });

    it("Clears custom no field errors, and calls on change after the the field value changes", async () => {
        renderComponent({customErrors: [{ name: "password", message: "" },{ name: "noField", message: "a no field error message"}], canHaveNoFieldError: true});

        await waitFor(() => expect(screen.getByText("a no field error message")).toBeInTheDocument());

        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.keyDown(passwordInput, {key: 'A', code: 'KeyA'})});

        await waitFor(() => expect(screen.queryByText("a no field error message")).not.toBeInTheDocument());

        await waitFor(() => expect(mockOnChange).toBeCalled());
    });

    it("Shows the password value when the eye is clicked", async () => {
        renderComponent();

        await waitFor(() => { expect(screen.getByTestId("input__password").querySelector('input').type).toEqual("password")});

        await waitFor(() => expect(screen.getByTestId("input__show-password")).toBeInTheDocument());

        act(() => { fireEvent.click(screen.getByTestId("input__show-password")) });

        await waitFor(() => { expect(screen.getByTestId("input__password").querySelector('input').type).toEqual("text")});
    });

    it("Applies the correct classname", async () => {
        renderComponent({className: "test"});

        await waitFor(() => { expect(screen.getByTestId("input__password")).toHaveClass("test")});
    });

    it("Calls onChange when when canHaveNoFieldErrors is false", async () => {
        renderComponent({canHaveNoFieldError: false});

        const passwordInput = screen.getByTestId("input__password").querySelector('input');

        act(() => { fireEvent.keyDown(passwordInput, {key: 'A', code: 'KeyA'})});
        
        await waitFor(() => expect(mockOnChange).toBeCalled());
    });

});
