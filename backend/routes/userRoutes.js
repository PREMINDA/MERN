import express from "express";
import { authUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/login", authUser);

export default userRoutes;
