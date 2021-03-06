const {Router} = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {saveUser, getUser} = require('../utilScripts/Database');
const users = Router();

const ACCESS_KEY = process.env.ACCESS_KEY;
const REFRESH_KEY = process.env.REFRESH_KEY;
const ACCESS_KEY_EXP = 10;

const refreshTokens = [];

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

users.post('/login', async (req, res, next) => {
    const {username, password} = req.body;
    const isDetailsValid = typeof username === 'string' && typeof password === 'string' && username.length >= 3 && password.length >= 3; 
    if (!isDetailsValid) return res.status(403).send('invalid username or password');
    const user = await getUser(username);
    if (!user) return res.status(403).send('invalid username or password');
    if( !bcrypt.compareSync(password, user.password) ) return res.status(403).send('invalid username or password');
    const payload = {name: user.name, createdAt:user.createdAt, iat: Math.floor(Date.now() / 1000)};
    const accessToken = jwt.sign( payload, ACCESS_KEY, {expiresIn: ACCESS_KEY_EXP} ); 
    const refreshToken = jwt.sign( payload, REFRESH_KEY);
    refreshTokens.push(refreshToken);
    res.status(200).json({accessToken, refreshToken});
});

users.post('/logout', async (req, res, next) => {
    const {refreshToken} = req.body;
    if( !refreshToken ) res.status(400).end();
    try {

        jwt.verify(refreshToken, REFRESH_KEY)
        if( !refreshTokens.includes(refreshToken) ) return res.status(400).end();
        const removeIndex = refreshTokens.findIndex(sToken => sToken === refreshToken);
        refreshTokens.splice(removeIndex, 1);
        res.status(200).send("User Logged Out Successfully");    
    } catch (e) {
        if( !refreshTokens.includes(refreshToken) ) return res.status(400).end();
    }
});

users.get('/info', async (req, res, next) => {
    try {
        const {user} = res.locals;
        if (user.noToken) return res.status(403).end();
        const {name, score} = await getUser(user.info.name);
        res.status(200).send({name, score}) 
    } catch (err) {
        next(err);
    }
});

users.put('/token', async (req, res, next) => {
    try {
        const {refreshToken} = req.body;
        if (refreshTokens.indexOf(refreshToken) === -1) throw 'invalid token';
        const {name, createdAt} = jwt.verify(refreshToken, REFRESH_KEY);
        const accessToken = jwt.sign({name, createdAt, iat: Math.floor(Date.now() / 1000)}, ACCESS_KEY, {expiresIn: ACCESS_KEY_EXP});
        res.status(200).json({accessToken}) 
    } catch (err) {
        console.log(err);
        res.status(401).json({action:'refresh', message: 'refresh denied'});
    }
});

module.exports = users;