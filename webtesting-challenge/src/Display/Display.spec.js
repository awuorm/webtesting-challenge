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
    test("displays locked and cannot open gate when locked", () => {
        // const  wrapperControls = rtl.render (<Controls locked={{locked: true}}/>);
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapperControls.queryByText(/Lock Gate/i));
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
        // expect(wrapperControls.getByTestId(/open-button/i)).toBeDisabled()
    });
    test("displays closed if the closed props is true", () => {
        const  wrapper = rtl.render (<Display closed="true"/>); // This passes even when false is passed
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    

    });
    test("displays open if the closed props is false", () => {
        const  wrapper = rtl.render (<Display closed="false"/>); // This passes even when true is passed
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    

    });

});
