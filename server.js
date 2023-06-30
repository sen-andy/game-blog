require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnect } = require("./db");
const postController = require("./controllers/post");
const authController = require("./controllers/auth");
const sessionValidation = require("./middlewares/session");

const HOST = process.env.HOST;
const PORT = process.env.POST;

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/post", sessionValidation, postController);

app.listen(PORT, () => {
    dbConnect();
    console.log(`[server] connected to ${HOST}:${PORT}`);
});