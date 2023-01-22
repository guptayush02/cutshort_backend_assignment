import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './src/config/dbConnect';

const app = express();
dotenv.config();

// routes
const routes = require("./src/routes/api");
app.use('/api', routes);

const port = process.env.BACK_PORT;
const host = process.env.BACK_HOST;

dbConnect();

// start the server
app.listen(port, () => {
  console.log(`server running : http://${host}:${port}`);
});
