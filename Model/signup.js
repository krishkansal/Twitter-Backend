const mongoose=require('mongoose');
const bcrypt = require("bcrypt");



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
})

//converting password into hash

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
      //  console.log(`the current password is ${this.password}`);
        this.password=await bcrypt.hash(this.password,10);
        this.cpassword=await bcrypt.hash(this.password,10);
    }
    next();
})

const data=new mongoose.model('userdata',userSchema);
module.exports=data;