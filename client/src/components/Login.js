import React, { Component } from 'react'
import {Container,Row,Col, Form,FormControl,FormGroup,FormText,Button, InputGroup,FormLabel} from 'react-bootstrap'
import axios from 'axios'
import loginStyles from '../styles/LoginStyles.module.css'
import {withRouter}  from 'react-router-dom'
import SideBar from './SideBar'
import CookieConsent from "react-cookie-consent";

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            getUser:'',
            getPassword:'',
            istina:true,
            userEror:'',
            passwordError:'',
            eror1:false,
            eror2:false,
            eror3:false,
            eror4:false,
            buttonDisabled:true
           
            

        }

        this.getUser =this.getUser.bind(this)
        this.getPassword =this.getPassword.bind(this)
        this.sendData=this.sendData.bind(this)
     
    }

    getUser(a){
        this.setState({
            getUser:a.target.value
        })


    }
    getPassword(b){
        this.setState({
          getPassword:b.target.value
        })


    }
   async sendData(c){
       try{
  c.preventDefault()
     let user=this.state.getUser
     let password=this.state.getPassword
     const sve={
         user,password
     }
     

   let x  =   await axios.post('/login',sve)

   setTimeout(() => {
    let up =document.querySelectorAll('.up')
    up.forEach((e)=>{
        e.value=''
    })
    
 
    
}, 800);
  



   if (x.data=='User must be minimum of 4 charachters') {
     
    this.setState({
     userEror:'User must be minimum of 4 charachters',
     eror1:true
    })
  }else if(x.data=='Please sing in'){
      this.setState({
         userEror:'Please sing in',
         eror1:true
      })
  }else if(x.data=='Password must be minimum of 6 charachters'){
     this.setState({
         passwordError:'Password must be minimum of 6 charachters',
         eror2:true
      })
  }else if(x.data == 'User not found in Data Base'){

    this.setState({
        eror3:true
     })

  }else if(x.data == 'welcome user'){

    this.setState({
      
        eror4:true
     })

     setTimeout(() => {
        this.props.history.push('/dashboard') 
     }, 1700);
   
      
  
    

  }else if(x.data=='welcome admin'){

    this.setState({
      
      eror4:true
   })

   setTimeout(() => {
      this.props.history.push('/dashboard/admin') 
   }, 1700);
 


  }
  


       }catch(err){
           console.log(err);

       }

    }

    componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }



    render() {
        return (
            <div className={loginStyles.main}>

              
<SideBar



menu_titlle="menu"

bgColor='grey'

hoverBgcolor='blue'

menu_items={["Sing Up","Login","Dashboard","Admin","Projects","Portfolio"]}

menu_links={["/","/login","/dashboard","/dashboard/admin","/projects","/portfolio"]}

menu_show={[true,true,true,false,false,false]}




instruction_titlle=" instructions"
instruction_items={["For Blogers","For Authors","For Developers","For Women","For Men","For Kids"]}
instruction_links={["/#blog","/#auth","/#dev","/#womne","/#men","/#kids"]}

instruction_show={[true,true,false,false,false,false]}



about_titlle=" About"
about_items={["About us","Company","Our work","Portfolio","Projects","Partensers"]}
about_links={["/#blog","/#auth","/#dev","/#womne","/#men","/#kids"]}

about_show={[true,true,true,false,false,false]}



  contact_titlle=" Contact"


  contact_items={["21000 New York","johndoe@gmail.com","+1/64-xxx-xx-xx","USA","Bullevar King Arthur","Partensers"]}

contact_links={["/#contact","/#auth"]}

contact_show={[true,true,false,false,false,false]}



                
                />

      







             
     
    <div className={loginStyles.first}>
         <Container>
             <Row>


             <Col className="text-center h4 text-light">Login</Col>
                 <Col md={12}>
                 
             
             


       
<Form onSubmit={this.sendData}>
  <Form.Group>
  <br />
  <FormLabel>Username</FormLabel>
    <Form.Control type="text" placeholder="" className="up" onChange={this.getUser} />
    <Form.Text >
        {this.state.eror1 ? <FormText style={{color:"red",fontSize:"1em"}} >{this.state.userEror}</FormText>:''}
  
    </Form.Text>
  </Form.Group>

<br/>
<br/>
  <Form.Group>
  <FormLabel>Password</FormLabel>
    <Form.Control type="password" placeholder="" className="up" onChange={this.getPassword} />
    <Form.Text>
        {this.state.eror2 ? <FormText style={{color:"red"}} className="text-center h3">{this.state.passwordError}</FormText>:''}
  
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

  {this.state.eror3 ? <FormText style={{color:"red"}}  className="text-center h3">Please sing in</FormText>:''}

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">

{this.state.eror4 ? <FormText style={{color:"green"}} className="text-center h3">Welcome User</FormText>:''}

</Form.Group>


  <Button variant="primary" className="float-end" type="submit" onClick={()=>{
   
         this.setState({
            eror1:false,
            eror2:false,
            eror3:false,
     
         
      }) 

   

 
   
      
  }}>
    Submit
  </Button>
</Form>

</Col>
             </Row>
             </Container>

             </div>


{/* 
             <CookieConsent

                debug={true}
            enableDeclineButton
              onDecline={() => {
                alert("You must accept cookies!");
               }}
                   onAccept={() => {
                this.setState({
                     buttonDisabled:false
                   })
   
                        }}
           
             
             >This site uses cookies.</CookieConsent> */}
          

                
            </div>
        )
    }
}


export default withRouter(Login)