import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      console.log(req.user);
      next();
    } catch (err) {
      console.error(err);
      res.set(401);
      throw new Error("Not Aythorized, Token faild");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized,no token");
  }

  next();
});

export default protect;
