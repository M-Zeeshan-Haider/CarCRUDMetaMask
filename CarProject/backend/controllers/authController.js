const userService = require("../services/authService");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const sendEmail = require("../utils/transporter.js");

require("dotenv").config();

async function registerUser(req, res) {
  const { email, name, password } = req.body;
  try {
    const newUser = await userService.createUser(email, name, password);

    const token = jwt.sign({ sub: newUser._id }, jwtSecret, {
      expiresIn: "1h",
    });

    await sendEmail(email, token);

    res.status(201).json({ message: "Check your Inbox to Confirm Email" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const user = await userService.findUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    if (!user.isEmailVerified) {
      const decoded = jwt.verify(req.body.password, jwtSecret);
      const userId = decoded.sub;
      const user = await userService.findUserById(userId);
      if (!user) {
        return res.status(400).json({ error: "User not found Register Again" });
      }
      user.isEmailVerified = true;
      await user.save();
      const token = jwt.sign({ sub: user._id }, jwtSecret);
      return res.json({
        message: "User logged in successfully",
        token,
        user: {
          name: user.name,
          email: user.email,
        },
      });
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ sub: user._id }, jwtSecret);

    return res.json({
      message: "User logged in successfully",
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
