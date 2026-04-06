import "dotenv/config";
import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";
import connectDB from "./config/connectDb.js";
import cookieParser from "cookie-parser";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(morgan("dev"));

app.use(router);
app.get("/", (req, res) => {
  res.send("chatroom Server is running!");
});

connectDB();

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("server running at :", PORT);
});
