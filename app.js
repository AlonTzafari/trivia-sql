const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.static("client/build"));

app.use( express.json() );

app.use("/", routes);

const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
}

app.use(errorHandler);



module.exports = app; 