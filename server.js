const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoute.js');
const dotenv = require("dotenv").config()
const errorHandler = require("./middlewares/errorHandler.js");
const connectDb = require("./config/db.js");
const tweetsRouter = require('./routes/tweetsRoute.js');


const app = express();
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

connectDb()


app.use("/api/users", userRouter)
app.use('/api/tweets', tweetsRouter);

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})