const express = require('express');
const { createUser } = require('../controllers/usercontroller');

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
    return res.status(200).json("hello world")
})
routerAPI.post("/register", createUser)

module.exports = routerAPI; 