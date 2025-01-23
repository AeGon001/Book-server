const jsonServer = require("json-server");

const bookServer = jsonServer.create();

const middleWare = jsonServer.defaults();
const PORT = 3000;

const route = jsonServer.router("db.json");

bookServer.use(middleWare);
bookServer.use(route);

bookServer.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});
