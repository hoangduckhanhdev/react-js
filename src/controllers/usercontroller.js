const { createUserService, loginrService, loginService } = require("../services/userService")

const createUser = async(req, res) => {
    
    const { username, email, password, fullname, phone, role } = req.body

    const data = await createUserService(username, email, password, fullname, phone, role)

    return res.status(200).json(data);
}
const handleLogin = async(req, res) => {
    
    const {email, password } = req.body;
    const data = await loginService(email, password)
    return res.status(200).json(data);
}

module.exports = {
    createUser, handleLogin
}