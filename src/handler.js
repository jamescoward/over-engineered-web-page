const { renderPage } = require('./renderPage/renderPage');

module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: renderPage(),
    headers: {
      'Content-Type': 'text/html',
    },
  };
};
