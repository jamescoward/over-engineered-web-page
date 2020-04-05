import { h } from "preact";
import render from "preact-render-to-string";
import MainComponent from "../components/mainComponent/mainComponent";

export const renderPage = () => {
  return `
    <html>
      <head>
        <title>Overengineered Webpage</title>
      </head>
      <body>
        ${render(
          <MainComponent content="Overengineered webpage - Shiny Version" />
        )}
      </body>
    </html>
  `;
};
