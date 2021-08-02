import React from "react";
import "@babel/polyfill";
import "@testing-library/jest-dom";
import {
    act,
    fireEvent,
    render, screen, waitFor,
} from "@testing-library/react";
import Form from "../../Form";
import { expect } from "@jest/globals";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye)

const mockOnClick = jest.fn();
        
describe("<Switcher />", () => {

    it("Clears all form errors when clicked", async () => {
        const customErrors = [{ name: "email", message: "" },{ name: "password", message: "" }, { name: "noField", message: "a no field error message" }]
        render(
            <Form customErrors={customErrors}>  
              <Form.Input
                name="email"
                label="Email"
                type="email"
                className="mb-4"
                canHaveNoFieldError
              />
              <Form.Input
                name="password"
                label="Password"
                type="password"
                className="mb-4"
                canHaveNoFieldError
              />
              <Form.Switcher onClick={mockOnClick} text="Switcher"/>
              <Form.Error/>
            </Form>)

        const emailInputContainer = screen.getByTestId("input__email").querySelector('div').querySelector("div");
        const passwordInputContainer = screen.getByTestId("input__password").querySelector('div').querySelector("div");

        await waitFor(() => expect(emailInputContainer).toHaveClass("Mui-error"));
        await waitFor(() => expect(passwordInputContainer).toHaveClass("Mui-error"));
        await waitFor(() => expect(screen.getByText("a no field error message")).toBeInTheDocument());

        act(() => { fireEvent.click(screen.getByText("Switcher"))});

        await waitFor(() => expect(emailInputContainer).not.toHaveClass("Mui-error"));
        await waitFor(() => expect(passwordInputContainer).not.toHaveClass("Mui-error"));
        await waitFor(() => expect(screen.queryByText("a no field error message")).not.toBeInTheDocument());
    });


});
