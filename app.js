//Server connection's
const express = require("express");
const app=express();
const port=3000 || process.env.PORT


//DataBase Connection's
require("./DB/conn");
const userdata=require("./Model/signup")
const router=require("./routes/route")

const bodyParser = require("body-parser")

//app.use('/',Router);
app.use(express.json());
app.use(router);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))


// app.get("/" , (req,res)=>{
//     res.status(200).send("hlo")
// })


app.listen(port,()=>{
    console.log("connection setup");
})