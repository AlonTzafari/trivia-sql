const {Router} = require('express');
const jwt = require('jsonwebtoken');
const trivia = require('./trivia');
const scoreboard = require('./scoreboard');
const users = require('./users');
const api = Router();

function validator(req, res, next) {
    const ACCESS_KEY = process.env.ACCESS_KEY;
    const authHeader = req.header('authorization');
    const user = {noToken: true};
    if(authHeader && req.originalUrl !== '/api/users/token') {
        try {
            const accessToken = authHeader?.split(' ')[1];
            user.info = jwt.verify(accessToken, ACCESS_KEY);
            user.noToken = false;
        } catch (err) {
            return res.status(401).end();
        }
    }
    res.locals.user = user;
    next();
}

api.use(validator);
api.use("/trivia", trivia);
api.use("/scoreboard", scoreboard);
api.use("/users", users);

module.exports = api;