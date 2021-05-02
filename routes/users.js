const {Router} = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {saveUser, getUser} = require('../utilScripts/Database');
const users = Router();

const ACCESS_KEY = process.env.ACCESS_KEY;
const REFRESH_KEY = process.env.REFRESH_KEY;


users.post("/register", async (req, res, next) => {
    const {username, password} = req.body;
    const isDetailsValid = typeof username === 'string' && typeof password === 'string' && username.length >= 3 && password.length >= 3; 
    if (!isDetailsValid) return res.status(400).send('invalid username or password');
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        const savedUserModel = await saveUser({username, password: hashedPassword});
        const {name, score, createdAt} = savedUserModel.toJSON(); 
        res.status(201).json({name, score, createdAt});
    } catch (e) {
        return res.status(409).send('username taken');
    } 
});


function validator(req, res, next) {
    const accessToken = req.header('authorization');
    const user = {noToken: true};
    if(accessToken) {
        user.noToken = false;
        try {
            user.info = jwt.verify(accessToken, ACCESS_KEY);
        } catch (err) {
            return res.status(401).end();
        }
    }
    res.locals.user = user;
    next();
}

module.exports = users;