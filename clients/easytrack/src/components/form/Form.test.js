import React from "react";
import "@babel/polyfill";
import "@testing-library/jest-dom";
import {
    render, screen, waitFor,
} from "@testing-library/react";
import Form from "./Form";
import { expect } from "@jest/globals";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye)



const renderComponent = ({customErrors} = {customErrors: []}) => {
    render(
    <Form customErrors={customErrors}>  
      <Form.Input
        name="password"
        label="Password"
        type="password"
        className="mb-4"
      />
    </Form>);
};

describe("<Form/>", () => {
    it("Renders correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("form__container")).toBeInTheDocument());
    });

    it("Applies custom error message and red outline to fields correctly", async () => {
        const customErrors = [{ name: "password", message: "an error message" }]
        renderComponent({customErrors});

        const passwordInputContainer = screen.getByTestId("input__password").querySelector('div').querySelector("div");

        await waitFor(() => expect(screen.getByText("an error message")).toBeInTheDocument());
        await waitFor(() => expect(passwordInputContainer).toHaveClass("Mui-error"));
    });

    it("Can apply the same no field error message to multiple fields with the outline and message correctly", async () => {
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
              <Form.Error/>
            </Form>)

        const emailInputContainer = screen.getByTestId("input__email").querySelector('div').querySelector("div");
        const passwordInputContainer = screen.getByTestId("input__password").querySelector('div').querySelector("div");

        await waitFor(() => expect(emailInputContainer).toHaveClass("Mui-error"));
        await waitFor(() => expect(passwordInputContainer).toHaveClass("Mui-error"));

        await waitFor(() => expect(screen.getByText("a no field error message")).toBeInTheDocument());
    });


});
