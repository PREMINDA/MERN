import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import generateToken from "../Util/generateToken.js";

import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const matchPassword = async function (enteredPassword, hashpassword) {
    return await bcrypt.compare(enteredPassword, hashpassword);
  };

  const user = await User.findOne({ email });
  const isalid = await matchPassword(password, user.password);

  if (user && isalid) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = "asdasdasd";

  res.send(user);
});

export { authUser, getUserProfile };
