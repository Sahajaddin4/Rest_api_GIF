const User=require('../models/User_Model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();
//user account creation
exports.Signup=async(req,res)=>{

    try {
        const{name,email,password}=req.body;
        //validation
        if(!name || !email || !password) {
            return res.status(400).json({
                success:false,
                message:'Please fill all details correctly! 😊'
            })
        };

        //Check user is already exists or not
        let user=await User.findOne({email:email});
        if(user){
            return res.status(400).json({
                success:false,
                message:'User already registered, Please login!😊'
            })
        }

        //if user not exists 
        const hashPassword=await bcrypt.hash(password,10);

        //create account 
        await User.create({
            name,
            email,
            password:hashPassword
        });

        //success response
        return res.status(201).json({
            success:true,
            message:'Account creation successfull 😍'
        })
       
    } catch (error) {
       console.log(error);
        return res.status(500).json({
            message:'Internal server error at user signup',
            success:false,
            error:error
        });
    }
}


//User login

exports.Login=async(req,res)=>{
    try {
        const{email,password}=req.body;
          //validation
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:'Please fill all details correctly! 😊'
            })
        };

        //Check user is  exists or not
        let user=await User.findOne({email:email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:'User is not registered, Please create account first!😊'
            })
        }

        //check if password matched or not
        const isMatched=await bcrypt.compare(password,user.password);
        if(!isMatched)
        {
            return res.status(400).json({
                success:false,
                message:'Password not matched ! 😢'
            })
        }

        //jwt token create
        const payload={
            email:user.email,
            id:user._id,
        }

        const token= jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});
        res.cookie('token',token);
        return res.status(200).json({
            success:true,
            message:'Login successful 😍'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error at user login 😔',
            success:false,
            error:error
        });
    }
}