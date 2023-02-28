const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Twitter" , { useNewUrlParser : true , useUnifiedTopology:true } ) // For duplication error
.then(()=>console.log("connection successfull..."))
.catch(err=>console.log(err));