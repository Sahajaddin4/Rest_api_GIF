const jwt=require('jsonwebtoken');
require('dotenv').config();

const Auth=async(req,res,next)=>{

    const {token}=req.body || req.cookies || req.headers.Authorization.split(' ')[1];

    //validation
    if(!token){
        return res.status(401).json({
            success:false,
            message:'No token found Login first..'
        })
    }
    //decode token
    let decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decode.email;
    next();
}

module.exports=Auth;