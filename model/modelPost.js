const mongoose = require ('mongoose')

const  UserSchema = mongoose.Schema({
    title:{
        require:true,
        type:String
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }
})


module.exports =mongoose.model('UserSchema',UserSchema)