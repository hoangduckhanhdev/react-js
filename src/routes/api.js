const express = require('express');
const { createUser, handleLogin } = require('../controllers/usercontroller');

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
    return res.status(200).json("hello world")
})
routerAPI.post("/register", createUser)
routerAPI.post("/login", handleLogin)


module.exports = routerAPI; 