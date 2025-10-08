const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUserService = async (username, email, password, fullname, phone, role) => {
   try {
        //
            const hashPassword = await bcrypt.hash(password, saltRounds);
        //
        let result = await User.create({
            username:username,
            email:email,
            password:hashPassword,
            fullname:fullname,
            phone: phone,
            role:"ADMIN"
        
        })
        return result;
   } catch (error) {
        console.log(error)
        return null;
   }

}
module.exports = {
    createUserService
}