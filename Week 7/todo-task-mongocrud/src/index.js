const express = require("express");

const connect = require("./config/database");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Todo Task using MongoCrud");
});

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));