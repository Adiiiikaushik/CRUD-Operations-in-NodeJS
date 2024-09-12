const express = require("express");
const { type } = require("os");
const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");

const PORT = 8000;
const app = express();

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

//Middleware
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/user", userRouter);

//Listen
app.listen(PORT, () => { console.log(`Server Started on port: ${PORT}`)});