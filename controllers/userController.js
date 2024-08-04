const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user')
const Tweets = require("../models/tweets")
const asyncHandler = require("express-async-handler")


//@desc  register user
//route POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandaroty")
    }
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        res.status(400)
        throw new Error("User Already registerd")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword)
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    });
    // console.log(`user created ${newUser}`)
    if (newUser) {
        res.status(201).json({ _id: newUser.id, email: newUser.email })
    }
    else {
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({ message: "User registered" })
})

//@desc  login user
//route POST /api/users/login

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("All fields are mandaroty")
    }
    const userExist = await User.findOne({ email })
    if (!userExist) {
        res.status(400)
        throw new Error("User doesn't exist")
    }
    const isMatch = await bcrypt.compare(password, userExist.password);

    if (userExist && isMatch) {
        const token = jwt.sign(
            {
                user: {
                    username: userExist.username,
                    email: userExist.email,
                    id: userExist.id
                }
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({ token })
    }
    else {
        res.status(400)
        throw new Error("Invalid Passsword")
    }

})


//@desc Get All tweets of logged user
//route GET /api/users/:user_id/timeline` 

const getUserTimeline = asyncHandler(async (req, res) => {
    const user_id = req.params.id
    const tweets = await Tweets.find({ user_id })
    console.log(tweets)
    res.status(200).json({ tweets})
});




module.exports = { registerUser, loginUser, getUserTimeline }