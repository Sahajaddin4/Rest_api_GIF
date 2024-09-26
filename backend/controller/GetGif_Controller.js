const axios=require('axios');
const Api_Key=require('../models/ApiKey_model');
const GetGif=async(req,res)=>{
   try {
    const API_KEY= req.headers['api_key']
    
    
    const tag=req.body.tag;
    //validation
    if(!API_KEY)
    {
        return res.status(401).json({
            success:false,
            message:'Subscribe first to use api.'
        });
    }

    //check api_key is correct or not
    let isCorrect=await Api_Key.findOne({
        user:req.user,
        key:API_KEY
    });
    if(!isCorrect)
    {
        return res.status(404).json({
            success:false,
            message:'API_KEY is not matched .'
        });
    }

    let url=tag?process.env.API_URL+process.env.API_KEY+'&tag='+tag:process.env.API_URL+process.env.API_KEY;
    
    let response=await axios.get(url,{
        headers:{
            'Content-type':'application/json, text/plain, */*'
        }
    },{timeout:5000});
    if(!response)
    {
        return res.status(504).json({
            success:false,
            message:'Request time out.'
        });
    }
    //console.log(response);
    
     let imageUrl=response.data.data.images.downsized.url;
    return res.status(200).json({
        message:'GIf fetched successfully',
        image:imageUrl
    })
   }
    catch (error) {
    console.log(error);
    return res.status(500).json({
        message:'Internal server error at Get_GIF 😔',
        success:false,
        error:error
    });
   }
}

module.exports=GetGif;