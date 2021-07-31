import React from "react";
import "@babel/polyfill";
import "@testing-library/jest-dom";
import {
    fireEvent, render, screen, waitFor, act,
} from "@testing-library/react";
import Button from "./Button";
import { expect } from "@jest/globals";


const renderComponent = ({ variant, size } = {variant: "success", size: "lg"}) => {
    render(<Button variant={variant} size={size} />);
};

describe("<Button/>", () => {
    it("Renders correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("button")).toBeInTheDocument());
    });

    it("Applies the success variant styling correctly", async () => {
        renderComponent();

        const buttonStyle = screen.getByTestId("button").style._values;

        await waitFor(() => expect(buttonStyle["background-color"]).toEqual("rgb(80, 200, 120)"));
        await waitFor(() => expect(buttonStyle["color"]).toEqual("white"));
    });

    it("Applies the brand variant styling correctly", async () => {
        renderComponent({variant: "brand"});

        const buttonStyle = screen.getByTestId("button").style._values;

        await waitFor(() => expect(buttonStyle["background-color"]).toEqual("rgb(63, 81, 181)"));
        await waitFor(() => expect(buttonStyle["color"]).toEqual("white"));
    });

    it("Applies the danger variant styling correctly", async () => {
        renderComponent({variant: "danger"});

        const buttonStyle = screen.getByTestId("button").style._values;

        await waitFor(() => expect(buttonStyle["background-color"]).toEqual("rgb(255, 87, 51)"));
        await waitFor(() => expect(buttonStyle["color"]).toEqual("white"));
    });

    it("Applies the danger-outline variant styling correctly", async () => {
        renderComponent({variant: "danger-outline"});

        const buttonStyle = screen.getByTestId("button").style._values;

        await waitFor(() => expect(buttonStyle["box-shadow"]).toEqual("0px 0px 3px #FF5733"));
        await waitFor(() => expect(buttonStyle["background-color"]).toEqual("transparent"));
        await waitFor(() => expect(buttonStyle["color"]).toEqual("rgb(255, 87, 51)"));
        await waitFor(() => expect(buttonStyle["font-weight"]).toEqual("400"));
    });

    it("Applies the default variant styling correctly", async () => {
        renderComponent({variant: undefined});

        const buttonStyle = screen.getByTestId("button").style._values;

        await waitFor(() => expect(buttonStyle["font-weight"]).toEqual("500"));
    });

    it("Applies the lg sizing correctly", async () => {
        renderComponent();

        await waitFor(() => expect(screen.getByTestId("button")).toHaveClass("h-12"));
    });

    it("Applies the md sizing correctly", async () => {
        renderComponent({size: "md"});

        await waitFor(() => expect(screen.getByTestId("button")).toHaveClass("h-10"));
    });

    it("Applies the sm sizing correctly", async () => {
        renderComponent({size: "sm"});

        await waitFor(() => expect(screen.getByTestId("button")).toHaveClass("h-6"));
    });
});
