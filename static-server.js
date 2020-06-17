const StaticServer = require('static-server');
const server = new StaticServer({
  rootPath: '.',            // required, the root of the server file tree
  port: process.env.PORT || 8080,               // required, the port to listen
  name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
  cors: '*',                // optional, defaults to undefined
  followSymlink: true,      // optional, defaults to a 404 error
});

server.start(function () {
  console.log('Server listening to', server.port);
});
