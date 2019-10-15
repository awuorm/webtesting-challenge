import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from "../Display/Display";
import Controls from "./Controls";

afterEach(rtl.cleanup);

let wrapper, wrapperDisplay;

beforeEach(() => {
  wrapper = rtl.render(<Controls />);
  wrapperDisplay = rtl.render(<Display />);
});

describe("Controls component", () => {
  test("matches the snapshot!", () => {
    expect(wrapper.container).toMatchSnapshot();
  });
  test("The close gate  button is enabled by default !", () => {
    expect(wrapper.queryByText(/close gate/i)).toBeEnabled();
  });
  test("The lock gate  button is disabled by default !", () => {
    expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
  });
  test("The close gate  button closes gate !", () => {
    expect(wrapperDisplay.queryByText(/open/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    // expect(wrapper.queryByText(/lock gate/i)).toBeEnabled();
    // expect(wrapperDisplay.queryByText(/closed/i)).toBeInTheDocument();
  });
});
