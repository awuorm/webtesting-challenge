import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import Dashboard from "./Dashboard";
import Display from "../Display/Display";
import Controls from "./Controls";

afterEach(rtl.cleanup);

let wrapper, wrapperControls, wrapperDisplay;

beforeEach(() => {
    wrapper = rtl.render (<Controls/>);
    //  wrapperDashboard = rtl.render(<Dashboard/>);
     wrapperDisplay = rtl.render(<Display/>);
});

describe("Controls component", () => {
    test('matches the snapshot!', () => {
        expect(wrapper.container).toMatchSnapshot();
      });
     
})