const express = require ('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("Todo task using MongoDb");
});

app.listen(3000, () => console.log(`Serving on ${PORT}`));