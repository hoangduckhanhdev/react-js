require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


const createUserService = async (username, email, password, fullname, phone, role = "ADMIN") => {
  try {
   
    const existing = await User.findOne({ email });
    if (existing) {
      return { success: false, message: "Email đã tồn tại" };
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      fullname,
      phone,
      role
    });

    return { success: true, message: "User created", user: { email: user.email, username: user.username, role: user.role } };

  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, message: "Email hoặc mật khẩu không đúng" };
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return { success: false, message: "Email hoặc mật khẩu không đúng" };
    }

    const payload = {
      email: user.email,
      username: user.username,
      role: user.role
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    return { 
      success: true, token,
      user: {
        email: user.email,
        username: user.username,
        role: user.role
      }
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

module.exports = {
  createUserService,
  loginService
};
