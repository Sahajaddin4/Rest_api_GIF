const mongoose=require('mongoose');

const ApiSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
   key:{
    type:String,
    default:null,
   }
});

module.exports=mongoose.model('Api_Key',ApiSchema);