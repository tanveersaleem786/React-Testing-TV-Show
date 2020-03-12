import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow.js");



test("App fetches shows data and render data", async () => {
    //mockFetchShow.mockResolvedValueOnce(shows);

  const { getByText, queryAllByTestId, getByTestId } = render(<App />);

  const dropDown = getByText(/Fetching data.../i);
  
  
});