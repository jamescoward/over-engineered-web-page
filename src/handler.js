import { renderPage } from "./renderPage/renderPage";

export const handler = async () => {
  return {
    statusCode: 200,
    body: renderPage(),
    headers: {
      "Content-Type": "text/html",
    },
  };
};
