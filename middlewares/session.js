const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_KEY = process.env.JWT_KEY;

const sessionValidation = async (req, res, next) => {
    try {
        if (req.method === "OPTIONS") next();
        console.log(req.cookies.token);
        const auth = req.headers.authorization || req.cookies.token;
        if (!auth) throw Error("no authorization");
        const authToken = auth.includes("Bearer")
            ? auth.split(" ")[1]
            : auth
        
        const payload = authToken ? jwt.verify(authToken, JWT_KEY) : undefined;
        if (!payload) throw Error("token is invalid");
    
        const foundUser = await User.findOne({ _id: payload._id });
        if (!foundUser) throw Error("user was not found");
    
        res.user = foundUser;
        next();
    } catch (err) {
        res.status(500).json([{
            message: err.message
        }]);
    }
}

module.exports = sessionValidation;