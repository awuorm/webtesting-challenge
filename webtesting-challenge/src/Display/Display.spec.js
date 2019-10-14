import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render (<Display/>);
});

// beforeEach(() => {
//     wrapper = rtl.render(<App />);
//     incSyncButton = wrapper.queryByText(/increase sync/i);
//   });
