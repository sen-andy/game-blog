require("dotenv").config();
const express = require("express");
const app = express();
const { dbConnect } = require("./db");
const cors = require("./middlewares/cors");
const postController = require("./controllers/post");
const authController = require("./controllers/auth");

const HOST = process.env.HOST;
const PORT = process.env.POST;

app.use(cors);
app.use(express.static(__dirname + "/client/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/post", postController);

app.listen(PORT, () => {
    dbConnect();
    console.log(`[server] connected to ${HOST}:${PORT}`);
});