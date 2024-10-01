const User=require('../models/User_Model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const ApiKey_model = require('../models/ApiKey_model');
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
        const newUser=await User.create({
            name,
            email,
            password:hashPassword,
            api_key:null
        });
        //create api key with null
        let apiKeyId=await ApiKey_model.create({
            user:newUser._id,
            
        });

        //update User db
        newUser.api_key=apiKeyId._id;
        let response=await newUser.save();
        //success response
        if(!response)
        {
            return res.status(403).json({
                success:false,
                message:'Error faced to create account!!'
            })
        }
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
            name:user.name,
            email:user.email,
            id:user._id,
        }

        const token= jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});
        res.cookie('token',token,{
            httpOnly:true,
            maxAge:3600*1000
        });
        return res.status(200).json({
            success:true,
            user:user.name,
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
};


//check auth
exports.checkAuth=async(req,res)=>{
    try {
        const{token}=req.cookies;
          //validation
        if(!token) {
            return res.status(400).json({
                success:false,
                isAuthenticated:false,
                message:'Login to your account first..'
            })
        };

       
        const user= jwt.verify(token,process.env.JWT_SECRET);
      
       
        return res.status(200).json({
            success:true,
            user:user.name,
            isAuthenticated:true,
            
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error at check authentication 😔',
            success:false,
            error:error
        });
    }
};


//logout
exports.logOut=async(req,res)=>{
    try {
       
        res.clearCookie('token',{
            httpOnly:true
        });
        res.status(200).json({
            message:'logout successful',
            success:true
        })
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error at Logout 😔',
            success:false,
            error:error
        });
    }
}