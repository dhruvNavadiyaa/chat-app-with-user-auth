import express from "express";
import authRouter from "./auth.route.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/test", (req, res) => {
    res.send("hello its working!")
});

export default router;