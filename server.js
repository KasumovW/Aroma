// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
    static: './dist',
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log('Server is runnig');
});
