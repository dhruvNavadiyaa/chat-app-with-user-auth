import express from 'express';
import 'dotenv/config'
import { createServer } from 'node:http';
import cors from "cors";
import router from './routes/index.js';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use(router);
app.get('/', (req, res) => {
  res.send("chatroom Server is running!");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log('server running at :', PORT);
});