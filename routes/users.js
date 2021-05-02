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
    try {
        const savedUserModel = await saveUser({username, password});
        const {name, score, createdAt} = savedUserModel.toJSON(); 
        res.status(201).json({name, score, createdAt});
    } catch (e) {
        return res.status(409).send('username taken');
    }
    
    
});


module.exports = users;