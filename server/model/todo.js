const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const todoSchema=new Schema({
    body:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    timeCreate:{
        type:String,
        default:Date.now
    }
});

const Todo=mongoose.model('Todo',todoSchema);

module.exports=Todo;