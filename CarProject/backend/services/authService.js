const { User } = require("../models/User");

// Service to create a new user
async function createUser(email, name, password) {
  const userExists = await User.findOne({ email });

  if (userExists && !userExists.isEmailVerified) return userExists;
  if (userExists) {
    throw new Error("User with this email already exists");
  }

  const newUser = new User({
    email,
    name,
    password,
  });

  await newUser.save();

  return newUser;
}

// Service to find a user by
async function findUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

const findUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
