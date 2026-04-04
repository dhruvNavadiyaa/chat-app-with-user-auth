import express from "express";
import { authenticateUser, login, logout, signup } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.post("/logout", logout);
authRouter.post("/authenticate-user", authMiddleware, authenticateUser);

export default authRouter; 