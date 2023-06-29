const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_KEY = process.env.JWT_KEY;

const sessionValidation = async (req, res, next) => {
    try {
        if (req.method === "OPTIONS") next();
        if (!req.headers.authorization) throw Error("no authorization");
        const authToken = req.headers.authorization.includes("Bearer")
            ? req.headers.authorization.split(" ")[1]
            : req.headers.authorization
        
        const payload = authToken ? jwt.verify(authToken, JWT_KEY) : undefined;
        if (!payload) throw Error("token is invalid");
    
        const foundUser = await User.findOne({ _id: payload._id });
        if (!foundUser) throw Error("user was not found");
    
        res.user = foundUser;
        next();
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = sessionValidation;