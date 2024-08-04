const express = require("express")
const {createTweet} = require("../controllers/tweetsController")
const authMiddleware = require("../middlewares/authMiddleware")


const tweetsRouter = express.Router()

tweetsRouter.use(authMiddleware)


tweetsRouter.post("/",createTweet)



module.exports =  tweetsRouter
