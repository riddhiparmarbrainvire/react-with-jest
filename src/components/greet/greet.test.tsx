import { render, screen } from "@testing-library/react";
// import Greet from "./Greet";

import Greet from "./Greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

// test driven development -
// software development process in which uou write tests before writing the software code.
// once the test has been written, you then write the code to ensure the tests pass.
// there are 3 phases -
// 1. create tests that verify the functionality of a specific test.
// 2. wite software code that will run the tests successfully when re-executed.
// 3. refactor the code for optimization while ensuring the tests continue to pass

// Also called as red-green testing as all tests go from a red failed state to a green passed state.

// Greet component should render the text 'hello' and if a name is passed into the component, it should
// render hello followed by the name.

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument()
});


