const { renderPage } = require('./renderPage');

it('renders correctly', () => {
  const renderedOutput =  renderPage();
  expect(renderedOutput).toMatchSnapshot();
});