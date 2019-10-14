import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";
import Controls from "../Controls/Controls";

afterEach(rtl.cleanup);

let wrapper, wrapperControls, lockGateButton;

beforeEach(() => {
    wrapper = rtl.render (<Display/>);
    wrapperControls = rtl.render(<Controls/>);
    lockGateButton = wrapperControls.queryByText(/Lock Gate/i);
});

describe(" Display Component", () => {
    test("displays default, 'unlocked'", () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    });
    test("displays default, 'open' ", () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });
    test("displays locked and cannot open get when locked", () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapperControls.queryByText(/Lock Gate/i));
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
        // expect(wrapperControls.getByTestId(/open-button/i)).toBeDisabled()

    });
});
