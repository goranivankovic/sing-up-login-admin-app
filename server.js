const express = require('express');
const cors = require('cors');

const coockieParser= require('cookie-parser');
const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');



const PORT = process.env.PORT || 5000;


const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(coockieParser())

// app.set('trust proxy', 1)








  



const uri=process.env.DB_KEY_FULLSTACK_APP


mongoose.connect(uri)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));










//Route za Sign up i LOgin

const log =require('./server/routes/loginAllroutes.js')

app.use('/user',log)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}






app.listen(PORT,()=>{
    console.log(`Server is runing on ${PORT}`)
})

