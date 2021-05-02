const {Router} = require('express');
const trivia = require('./trivia');
const scoreboard = require('./scoreboard');
const users = require('./users');
const router = Router();

router.use("/trivia", trivia);
router.use("/scoreboard", scoreboard);
router.use("/users", users);

module.exports = router;