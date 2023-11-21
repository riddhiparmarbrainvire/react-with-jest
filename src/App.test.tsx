import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// test (name, function, timeout)
// name - test name used to identify the test
// function - function that contains the expectations to test 
// timeout - optional argument, used to specify how long to wait before aborting the test. the default timeout is 5 secs
// test and expect are jest's method
// toBeInTheDocument() is a mather function used to carry out the assertion
// if the test case pass we see pass in the terminal
