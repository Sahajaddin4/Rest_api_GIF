const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:100,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },

    password:{
        type:String,
        require:true,
        trim:true
    },
    api_key:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Api_Key'
    }
});

module.exports=mongoose.model('User',UserSchema);