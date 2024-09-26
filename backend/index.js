const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config()
const PORT=process.env.PORT;
//middlewares
app.use(express.json());
app.use(cors());




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