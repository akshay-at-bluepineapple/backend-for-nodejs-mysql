const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require("./api/users/userRouter");


app.use(express.json()); //as user is passing the json object hence need to convert it to json explicitly
//user router
app.use("/api/users",userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("[-] server running on 3000");
});