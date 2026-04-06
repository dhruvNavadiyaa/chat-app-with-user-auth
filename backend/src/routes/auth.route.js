import express from "express";
import {
  authenticateUser,
  login,
  logout,
  signup,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/sign-in", login);
authRouter.post("/sign-up", signup);
authRouter.post("/logout", logout);
authRouter.post("/authenticate-user", authMiddleware, authenticateUser);

export default authRouter;
