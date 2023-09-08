require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { dbConnect } = require("./db");
const postController = require("./controllers/post");
const authController = require("./controllers/auth");

const PORT = process.env.POST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/post", postController);

if (process.env.NODE_ENV === "PRODUCTION") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html")));
}

app.listen(PORT, () => {
    dbConnect();
    console.log(`[server] connected to ${PORT}`);
});