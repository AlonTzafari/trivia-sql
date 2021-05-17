require('dotenv').config();
const path = require('path')
const express = require('express');
const api = require('./api');
const app = express();
const appDir = path.join( __dirname, 'client', 'build');

app.use((req, res, next) => {
    console.log(req.method, req.baseUrl, req.originalUrl); 
    next();
});

app.use( express.json() );

app.use(express.static(appDir));

app.use("/api", api);

app.get('*', (req, res, next) => {
    console.log(req.path); 
    if (req.baseUrl.includes('/api')) return next();
    res.sendFile(path.join(appDir, 'index.html'));
})



const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
}

app.use(errorHandler);



module.exports = app; 