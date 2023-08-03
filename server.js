const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('bots.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
