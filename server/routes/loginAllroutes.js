

const {User,Admin} =require('../model/modelLogin.js')


const {checkUser,loginUser} =require('../controller/midelware')

const jwt = require('jsonwebtoken');



const express = require('express');


const routes =express.Router()



//Post metoda za registraciju Usera

 routes.post('/singin',checkUser, async(req,res)=>{





    const user =req.body.user;
    const password =req.body.password;



    const newUser= new User({
        user,password
    })
    

   newUser.save()

   .then(() => res.cookie('jwt',{all:[newUser.user,newUser.password]},{ httpOnly:true  ,maxAge:700000 , domain:'https://goga-login.herokuapp.com/'}).json({msg:newUser}))
  .catch(err => res.status(400).json('Error: ' + err));





    


  
})





//Delete metoda za brisanje korisnika samo ako imas admin cookie
  routes.delete('/:id',(req, res) => {
    const name=req.cookies['admin123']
    if (!name) {
      return res.send('Access not allowed').status(403)
      
    }

    User.findByIdAndDelete(req.params.id)
      .then(() => res.clearCookie('jwt').clearCookie('korisnik').json('Exercise deleted.').status(401))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

//Get metoda da vidis svoj cookie value
  routes.get('/singin',(req,res)=>{
    const name=req.cookies['jwt']

if (!name) {
  return res.send('Please sing up').status(403)
  
}

   else if (name) {

      return res.send(name.all[0] + name.all[1])
      
    }
    return res.send("no cookies found");
 
  
  })

  //Get metoda da vidis svoj cookie value samo ako imas admin cookie
  routes.get('/admin',(req,res)=>{
    const name=req.cookies['admin123']

    if (name) {

      return res.json({msg:['Welcome Admin',name]}).status(200)
      
    }
    return res.send("Access not allowed").status(403);
 
  
  })
  

  //Get metoda da vidis sve podatke o korisnicima samo ako imas admin cookie
routes.get('/all',(req,res)=>{

  const name=req.cookies['admin123']


  if (!name ) {
    return res.send('Access not allowed').status(403)
    
  }

 
    return User.find()
    .then(exercises => res.json(exercises).status(201))
    .catch(err => res.json({msg: err}).status(400));
  

  
})


//Get metoda da vidis dali si ulogovan
routes.get('/login',(req,res)=>{
const a =req.body.user
  const user=req.cookies['korisnik']
if(!user){
 return res.send('You are not loged in').status(403)

}else if (user) {
  return res.send(user.all[0]).status(200)
    
  }
  return res.send("Please leave").status(403);

})



//Delet cookie

routes.get('/detelCookie',(req,res)=>{
  const korisnik=req.cookies['korisnik']
  const jwt=req.cookies['jwt']
 if(korisnik && jwt){

    return res.clearCookie('jwt').clearCookie('korisnik').send('Two cookies has been deleted')


  }else if (korisnik) {
    return res.clearCookie('korisnik').send('Cookie has been deleted')
    
  }else if(jwt){
    return res.clearCookie('jwt').send('Cookie has been deleted')

  }else{
    return res.send('Please sing up')
  }

})

routes.get('/deleteAdmin',(req,res)=>{
  const admin=req.cookies['admin123']
  const korisnik=req.cookies['korisnik']
  const jwt=req.cookies['jwt']



  if(korisnik && jwt && admin){

    return res.clearCookie('jwt').clearCookie('korisnik').clearCookie('admin123').send('Three cookies has been deleted')


  }else if (korisnik && admin || jwt && admin)  {
    return res.clearCookie('korisnik').clearCookie('admin123').send('Cookies has been deleted')
    
  }else if (korisnik) {
    return res.clearCookie('korisnik').send('Cookie has been deleted')
    
  } else if(jwt){
    return res.clearCookie('jwt').send('Cookie has been deleted')

  }else if(admin){
    return res.clearCookie('admin123').send('Cookie has been deleted')

  }
  else{
    return res.send('Please sing up')
  }




})



//Get metoda da vidis s usera pojedinacno ako imas njihov id i imas admin cookie
routes.get('/:id',(req, res) => {
  const user=req.cookies['admin']
  if(!user){
   return res.send('you are not loged in').status(403)
  
  }
  User.findById(req.params.id)//Moras staviti req.parmas.id da  trazis parametre
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});









//Post metoda da posaljes ime i password ako postojis dobijas coookie , ustavri login
routes.post('/login',loginUser,(req,res)=>{
  const user=req.body.user
  const password=req.body.password


  if(user == 'admin' && password == 'admin123' ){
    // return    res.cookie('korisnik',{all:[user,password]},{maxAge:864000, httpOnly: true,}).cookie('admin123','admin123',{maxAge:864000, httpOnly: true }).json('welcome admin').status(200)

    return    res.cookie('admin123','admin123',{maxAge:864000, httpOnly: true }).json('welcome admin').status(200)
   
}else{

  return    res.cookie('korisnik',{all:[user,password]},{maxAge:864000, httpOnly: true }).json('welcome user').status(200)
}

})





routes.post('/:id',checkUser,(req, res) => {
  User.findById(req.params.id)
    .then(exercise => {
      exercise.user = req.body.user;
      exercise.password = req.body.password;


      exercise.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});










module.exports =routes;



