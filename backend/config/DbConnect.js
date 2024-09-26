const DbConnect=()=>{
    const mongoose=require('mongoose');
    require('dotenv').config();
    //connect db
    const url=process.env.DB_URL
    mongoose.connect(url).then(()=>{
        console.log('DB connected');
        
    }).catch((err)=>{
        console.log(`Failed to connect with DB   .. ${err}`);
       process.exit(1); 
    });
}

module.exports=DbConnect;