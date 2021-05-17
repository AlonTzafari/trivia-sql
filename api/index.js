const {Router} = require('express');
const jwt = require('jsonwebtoken');
const trivia = require('./trivia');
const scoreboard = require('./scoreboard');
const users = require('./users');
const api = Router();

function validator(req, res, next) {
    const ACCESS_KEY = process.env.ACCESS_KEY;

    const accessToken = req.header('authorization');
    const user = {noToken: true};
    if(accessToken) {
        try {
            user.info = jwt.verify(accessToken, ACCESS_KEY);
            user.noToken = false;
        } catch (err) {
            console.log(err);
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