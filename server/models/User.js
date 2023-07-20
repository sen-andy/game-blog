const { mongoose } = require("../db");

const User = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("user", User);