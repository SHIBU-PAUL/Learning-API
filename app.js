import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";


export const app = express();

config({
  path:"./data/config.env"
})


//Using Midddlewawares
app.use(express.json());
app.use(cookieParser())

//Useing routes
app.use("api/v1/users",userRouter);
app.use("api/v1/task",taskRouter);



app.get("/",(req,res)=>{
  res.send("Nice working")
});



