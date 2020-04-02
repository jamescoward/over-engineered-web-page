import { renderPage } from "./renderPage";

it("renders correctly", () => {
  const renderedOutput = renderPage();
  expect(renderedOutput).toMatchSnapshot();
});
