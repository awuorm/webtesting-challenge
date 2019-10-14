import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import Display from "./Display";
import Controls from "../Controls/Controls";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let wrapper, wrapperControls;

beforeEach(() => {
    wrapper = rtl.render (<Dashboard/>);
     wrapperControls = rtl.render(<Controls/>);
    // lockGateButton = wrapper.queryByText(/Lock Gate/i);
});

describe("Dashboard component", () => {
    test('matches the snapshot!', () => {
        expect(wrapper.container).toMatchSnapshot();
      });
      test("shows controls component", () => {
          expect(wrapperControls.queryByText(/lock gate/i)).toBeInTheDocument;
      })
})