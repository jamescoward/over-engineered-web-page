import { h } from "preact";
import render from "preact-render-to-string";

import MainComponent from "./mainComponent";

it("renders correctly", () => {
  const output = render(<MainComponent content="Some content" />);
  expect(output).toMatchSnapshot();
});
