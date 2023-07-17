const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_KEY = process.env.JWT_KEY;

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });
        if (!foundUser) throw Error("the email is incorrect");
        const verifyPassword = await bcrypt.compare(password, foundUser.password);
        if (!verifyPassword) throw Error("the password is incorrect");

        const token = jwt.sign({ _id: foundUser._id }, JWT_KEY);
        
        res.status(201).json({
            message: "user signed in",
            token
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});

// router.post("/signup", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const hashPassword = await bcrypt.hashSync(password, SALT);
//         const newUser = new User({ email, password: hashPassword });
//         await newUser.save();

//         const token = jwt.sign({ _id: newUser._id }, JWT_KEY);

//         res.status(201).json({
//             message: "user created",
//             newUser,
//             token
//         })
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// });


module.exports = router;