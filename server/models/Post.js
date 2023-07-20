const { mongoose } = require("../db");

const Post = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        img: {
            type: String
        },
        body: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("post", Post);