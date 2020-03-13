module.exports = (/*options*/) => {
  // Use options.server to access http.Server. Example with socket.io:
  //     const io = require('socket.io')(options.server)
  const app = require('express')()

  app.get('/',
    function (req, res) {
      const request = require('request');
      request('http://demo:3000/', { json: true }, (err, backres, body) => {
        if (err) {
          console.log(err);
          body = { "error": "an error occcured " }
        }
        res.send(body);
      });
    }
  );

  return app;
};
