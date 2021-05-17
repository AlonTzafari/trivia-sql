const {Router} = require('express');
const trivia = require('./trivia');
const scoreboard = require('./scoreboard');
const users = require('./users');
const api = Router();

api.use("/trivia", trivia);
api.use("/scoreboard", scoreboard);
api.use("/users", users);

module.exports = api;