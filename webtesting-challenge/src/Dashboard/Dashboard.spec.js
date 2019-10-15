import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "../Controls/Controls";
import Dashboard from "./Dashboard";
import Display from "../Display/Display";

afterEach(rtl.cleanup);

let wrapper, wrapperControls, wrapperDisplay;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
  wrapperControls = rtl.render(<Controls />);
  wrapperDisplay = rtl.render(<Display />);
});

describe("Dashboard component", () => {
  test("matches the snapshot!", () => {
    expect(wrapper.container).toMatchSnapshot();
  });
  test("shows controls component", () => {
    expect(wrapperControls.queryAllByText(/lock gate/i)).toBeInTheDocument;
  });
  test("shows display component", () => {
    expect(wrapperDisplay.queryAllByText(/unlocked/i)).toBeInTheDocument;
  });
});
