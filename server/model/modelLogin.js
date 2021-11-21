const mongoose = require('mongoose');




const sema = new mongoose.Schema({
    user:{
        type:String,
        trim:true,
        minlength:4,
        unique:[true,'User exists allready.'],
        required:true

    },
    password:{
        type:String,
        minlength:[6,'Min length 6 '],
        required:true
    }


},{timestamps:true})




const sema2 = new mongoose.Schema({
    user:{
        type:String,
        trim:true,
        minlength:[4,'Minimum length of password 4 '],
        unique:[true,'Username alerdy exists'],
        required:true

    },
    password:{
        type:String,
        minlength:[6,'Minimum length of password 6 '],
        required:true
    },
    message:{
        type:String,
        
     
    }


},{timestamps:true})








const User = mongoose.model('User', sema);
const Admin = mongoose.model('Admin', sema2);


module.exports ={

User,Admin
}