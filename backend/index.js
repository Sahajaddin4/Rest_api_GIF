const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config()
const PORT=process.env.PORT;
const DbConnect=require('./config/DbConnect');
const cookieparser=require('cookie-parser');
//routes
const UserRoutes=require('./routes/User_Routes');
const GifRoutes=require('./routes/Gif_Routes');
const ApiRoutes=require('./routes/Api_Routes');
//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieparser());
//Databae connection
DbConnect();

//define routes
//user routes
app.use('/rest-api-gif/user',UserRoutes);
//Api key routes
app.use('/rest-api-gif/user',ApiRoutes);
//get-Gif
app.use('/rest-api-gif/gif',GifRoutes);
//Default route
app.get('/',(_,res)=>{
    res.send(`<h1>This is my home page </h1>`);
})
//Create server listening at port 
app.listen(PORT,(err)=>{
    if(err)
    {
        console.error(err);
    }
    console.log(`Server connected at port ${PORT}`);
    
});