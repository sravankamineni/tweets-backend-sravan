const Tweets = require('../models/tweets');
const asyncHandler = require('express-async-handler')


//@desc Create tweet
//route POST /api/tweets
exports.createTweet = asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text) {
        res.status(400)
        throw new Error("Invalid title")
    }
    const newTweet = await Tweets.create({ user_id: req.user.id, text })
    res.status(201).json({ newTweet })
});



