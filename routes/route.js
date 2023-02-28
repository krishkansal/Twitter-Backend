const express=require("express")

const router=new express.Router();
const data= require("../Model/signup");
const bcrypt = require("bcrypt")


router.get('/',(req,res)=>{
    res.status(200).send('working')
})


router.post('/login',async (req,res)=>{
    try{

        const Email=req.body.email;
        const Password=req.body.password;

       // console.log(`${Email} and password is ${Password}`);

       const useremail = await data.findOne({email:Email});

        const matchpassword = await bcrypt.compare(Password,useremail.password);


        if(matchpassword){
            res.status(201).send("Successfull");
        }else{
            res.send("Invalid Login Details");
        }
       
    }catch(error){
        res.status(400).send("Record not found")
    }
    
})



router.post('/signup',async (req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.cpassword;

         if(password===cpassword){

            const signupdata=new data({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password,
                cpassword:req.body.cpassword

            })
            console.log("the success part " + signupdata);

            const registered =await signupdata.save();
            console.log("the page part " + registered);
            res.status(201).send("home page");

        }else{
            res.send("password are not matching")
        }

    }catch(error){
        res.status(400).send(error);
    }
})




module.exports=router