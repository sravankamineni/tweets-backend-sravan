const mongoose = require("mongoose")


const tweetSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})



module.exports = mongoose.model("Tweets", tweetSchema)