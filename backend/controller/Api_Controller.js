const User=require('../models/User_Model');
const Api_Key=require('../models/ApiKey_model');
const { v4: uuidv4 } = require('uuid');
exports.createApiKey=async(req,res)=>{
   try {
    const userId=req.user;
    //validation
    if(!userId){
        return res.status(400).json({
            message:'UserId is missing ',
            success:false
        });
    }
    //check user is present or not
    let user=await User.findById(userId);
    if(!user)
    {
        return res.status(400).json({
            message:'User does not have account ',
            success:false
        });
    }
    
    //check if already Api_key created or not
    let isPresent=await Api_Key.findOne({user:userId,key:{$ne:null}});
    if(isPresent)
    {
        return res.status(403).json({
            message:'User have already a api key ',
            success:false
        });
    }
    //create api key
    let newKey= uuidv4(); 
    let isKeyExists=await Api_Key.findOne({key:newKey});
    while(isKeyExists)
    {
        newKey=uuidv4();
        isKeyExists=await Api_Key.findOne({key:newKey});
    }
    //Update api key
    let apiKey=await Api_Key.findOneAndUpdate({user:userId},{
        key:newKey
    },{new:true});
 

 
    return res.status(201).json({
        success:true,
        message:'Api_Key created successfully..',
        apiKey:apiKey
    });
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        message:'Server error at Api key creation. ',
        success:false
    });
   }
}