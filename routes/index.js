const {Router} = require('express');
const trivia = require('./trivia');
const scoreboard = require('./scoreboard');
const router = Router();

router.use("/trivia", trivia);
// router.use("/scoreboard", scoreboard);

module.exports = router;