const express = require('express');
const coockieParser = require('cookie-parser');
const {User,Admin} =require('../model/modelLogin');

function checkUser(req,res,next){
    
const user =req.body.user
const password =req.body.password



if (user.length<4) {
  return res.send('User must be minimum of 4 charachters').status(401)
}
else if(password.length<6){
  return res.send('Password must be minimum of 6 charachters').status(401)

}

  
return User.findOne({user: new RegExp('^'+user+'$', "i")}, function(err, doc) {
    if (err) {

   console.log(err);
   
    }else {

      if (doc===null) {
      
          
            return     next()
         
      }

      res.send('User already exists').status(401)

  }
      
  });




       
}

async function loginUser(req,res,next) {
    
  const user =req.body.user
  const password =req.body.password
  const jwt=req.cookies['jwt']



  if (user.length<4) {
    return res.send('User must be minimum of 4 charachters').status(401)
  }else if(password.length<6){
    return res.send('Password must be minimum of 6 charachters').status(401)
  
  }
  else if(jwt){

    return next()

  }


 User.findOne({user: new RegExp('^'+user+'$', "i")}, function(err, doc) {
    if (err) {

throw err;
   


    }else if(doc == null){
      return res.send('User not found in Data Base')
    
    }else if(user== doc.user && password == doc.password){
      return  next()
    
    }

   return res.send('Please sing in')

  
 



        
    
    
  });
  





    
    
}



module.exports ={checkUser,loginUser}


