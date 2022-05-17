const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
    try {
        const { email, password, passwordVerify } = req.body;

        // validation

        if (!email || !password || !passwordVerify) return res.status(400).json({ errorMessage: "Please enter all required fields." });  // 400 - bad request
        if (password.length < 6) return res.status(400).json({ errorMessage: "Please enter a password of at least 6 characters." });
        if (password !== passwordVerify) return res.status(400).json({ errorMessage: "Passwords do not match. Please try again." });

        const existingUser = await User.findOne({ email });
        console.log(existingUser);
        if (existingUser) return res.status(400).json({ errorMessage: "An account with this emmail already exists." });

        // hashing the password

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        console.log(passwordHash);

        // saving a new user account to the db

        const newUser = new User({
            email, passwordHash
        });

        const savedUser = newUser.save();

        // signing the token

        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET);

        // sending the token in a HTTP only cookie

        res.cookie("token", token, {
            httpOnly: true
        }).send();
    } catch (err) {
        console.error(err);
        res.status(500).send();    // 500 - internal server error
    }
});

// logging in

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        // validation

        if (!email || !password) return res.status(400).json({ errorMessage: "Please enter all required fields." });
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(400).json({ errorMessage: "Wrong email or password." });
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if(!passwordCorrect) return res.status(401).json({ errorMesssage: "Wrong email or password." });

         // signing the token

         const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET);

        // sending the token in a HTTP only cookie

        res.cookie("token", token, {
            httpOnly: true
        }).send();
    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

// logging out

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
})

module.exports = router;