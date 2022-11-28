const express = require("express");
const { json } = require("express");
const connect = require("./config/database");
const todoRoute = require("./router/todoRoutes");

connect();

const app = express();
app.use(json());
app.use('/user', todoRoute)

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Todo task using MongoDb");
});

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
