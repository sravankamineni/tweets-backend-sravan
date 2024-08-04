const express = require("express")
const {registerUser,loginUser, getUserTimeline} = require("../controllers/userController")

const userRouter = express.Router()


userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/:id/timeline", getUserTimeline)


module.exports = userRouter


