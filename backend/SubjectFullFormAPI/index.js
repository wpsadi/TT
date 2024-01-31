import express from "express";
import route from "./routes/routes.js";

const app = express();


app.use("/api",route)

app.use("/",(req,res)=>{
    res.status(404).json({
        "status":404,
        "Invalid Page":true
    })
})




app.use("*",(req,res)=>{
    res.status(404).json({
        "status":404,
        "Invalid Page":true
    })
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server running at PORT:${port}`)
})