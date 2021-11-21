import React, { Component } from 'react'
import axios from 'axios'
import SideBar  from './SideBar'
import { withRouter } from 'react-router'
import {Container,Row,Col,Button, Form, FormControl, FormGroup, FormLabel, FormText} from 'react-bootstrap'
import { FaSleigh } from 'react-icons/fa'




export default class AdminUpdate extends Component {
    constructor(props){
        super(props)

        this.state={
            ime:'',
            sve:[],
            laz:false,
            laz2:false,
            laz3:false,
            laz4:false,


            user:'',
            erro1:'',


            password:'',
            erro2:'',


            erro3:'',
            buttonDisabled:false,
            userId:''
          
        
        }

        this.deleteCookie=this.deleteCookie.bind(this)
        this.getUserInput=this.getUserInput.bind(this)
        this.getUserPassword=this.getUserPassword.bind(this)
        this.sendData=this.sendData.bind(this)
    }
    
async componentDidMount(){

 


    const res = await axios.get('/admin')


   if (res.data=='Access not allowed') {
    this.props.history.push('/login')
       
   }else if(res.data.msg[0]=='Welcome Admin'){

    this.props.history.push('/dashboard/admin/update')

    

         this.setState({
        ime:res.data.msg[1]
            })


            setTimeout(async () => {

                const res2 = await axios.get('/all')
                // console.log(res2.data);
             
                this.setState({
                    sve:res2.data
                })

        
  
              
            }, 2000);

     







   }else{
    this.props.history.push('/login')
   }






 }



 async deleteCookie(a){
    a.preventDefault()
 const res = await axios.get('/deleteAdmin')
 if (res.data == 'Please sing up') {

  this.props.history.push('/')

     
 }else if(res.data == 'Cookie has been deleted'){
     this.setState({
         laz5:false,
      
     })
     this.props.history.push('/login')

 }else{
     this.props.history.push('/')
 }





 }

 getUserInput(a){
     this.setState({
         user:a.target.value
     })

 }

 getUserPassword(b){
    this.setState({
        password:b.target.value
    })

}

async sendData(c){
    try{
        c.preventDefault()
        const user=this.state.user
        const password=this.state.password
     const sve={
         user,password
     }


        const res =await axios.post(`/${this.state.userId}`,sve)
        // console.log(res);

        if (res.data=='User must be minimum of 4 charachters') {
    
            this.setState({
                laz:true,
                erro1:'User must be minimum of 4 charachters'

            })
            
        }else if(res.data=='User already exists'){

            
            this.setState({
                laz:true,
                erro1:'User already exists'

            })

        }else if(res.data=='Password must be minimum of 6 charachters'){
            this.setState({
                laz2:true,
                erro2:'Password must be minimum of 6 charachters'
            })
        }else if(res.data=='User updated!'){
            this.setState({
                laz3:true,
                erro3:'User Updated'
            })
        }


    }catch(err){
        console.log(`Greska je ${err}`);

    }



}




    render() {
        return (
            <div>

                
                              
<SideBar



menu_titlle="menu"

bgColor='firebrick'

hoverBgcolor='blue'

menu_items={["Sing Up","Login","Dashboard","Admin","Projects","Portfolio"]}

menu_links={["/","/login","/dashboard","/dashboard/admin","/projects","/portfolio"]}

menu_show={[false,false,false,false,false,false]}




instruction_titlle="Admin Dashboard"
instruction_items={["Get Users Data","Create User","Update User","Delete User","For Men","For Kids"]}
instruction_links={["/dashboard/admin","/dashboard/admin/create","/dashboard/admin/update","/dashboard/admin/delete","/#men","/#kids"]}

instruction_show={[true,true,true,true,false,false]}



about_titlle=" About"
about_items={["About us","Company","Our work","Portfolio","Projects","Partensers"]}
about_links={["/#blog","/#auth","/#dev","/#womne","/#men","/#kids"]}

about_show={[true,true,true,false,false,false]}



  contact_titlle=" Contact"


  contact_items={["21000 New York","johndoe@gmail.com","+1/64-xxx-xx-xx","USA","Bullevar King Arthur","Partensers"]}

contact_links={["/#contact","/#auth"]}

contact_show={[true,true,false,false,false,false]}



                
                />






                
<br/>
                
                <Container fluid>
                    <Row>
                       
                        <Col md={10} sm={7} className="text-end">Admin {this.state.ime}
                        </Col>
                        <Col md={2} sm={5}> <Button size="sm" onClick={this.deleteCookie}>Log Out</Button></Col>
                    </Row>
                </Container>
                <br></br>




                <Container fluid>
                    <Row>
                       
                        <Col  sm={12} className="text-center h6"> Update User
                        </Col>
                       
                    </Row>
                </Container>

                <br></br>
                <br></br>

                { this.state.sve.map((el)=>
        <Container key={el._id}>
            <Row>
            
        
     
        
                <Col xs={6}>
             
         
                    
                   <span className="text-primary h6">User: </span> {el.user}
          
                
                </Col>
    
         
                <Col xs={6}>
      
            <Button className="allButtons" size="sm" onClick={()=>{
                this.setState({
                    userId:el._id,
                    laz4:true
                })
                // console.log(this.state.userId);



                setTimeout(() => {
                    const allButtons =document.querySelectorAll('.allButtons')

                    allButtons.forEach((e)=>
                        e.disabled=true
                    )
                    
                }, 300);
              
            }}>Update User</Button>
     
          
          </Col>

                             
       
   

          <Col xs={12}><hr></hr></Col>
            
         
              
             
   
           </Row>
        </Container>
         
   
         )
 }





 

     {this.state.laz4 ?

                
                <Container>
                    <Row>
                        <Col md={7}>
                            <Form onSubmit={this.sendData}>
                                    <FormGroup>
                                        <FormLabel>User</FormLabel>
                                        <FormControl type="text"  name="User" className="all"  onChange={this.getUserInput}/>
                                        {this.state.laz ? <FormText className="text-danger">{this.state.erro1}</FormText>   :'' }
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl type="password" className="all"  name="Password" onChange={this.getUserPassword}/>

                                        {this.state.laz2 ? <FormText className="text-danger">{this.state.erro2}</FormText>   :'' }
                                    </FormGroup>

                                   
                                   {this.state.laz3 ? 
                                    <FormGroup>

                                         <FormText className="text-success">{this.state.erro3}</FormText>  
                                    </FormGroup>
                                     :'' }
                                     <br/>
                            

                                            <Button type="submit" disabled={this.state.buttonDisabled} onClick={()=>{
                                                setTimeout(() => {
                                                   this.setState({
                                                    buttonDisabled:true,

                                                })
  
                                                }, 700);

                                               
                                                setTimeout(() => {
                                            const all =document.querySelectorAll('.all')
                                            const allButtons =document.querySelectorAll('.allButtons')

                                            all.forEach((el)=>{
                                                el.value=''
                                            })

                                            allButtons.forEach((el)=>{
                                                el.disabled=false
                                            })

                                                    this.setState({
                                                        erro1:false,
                                                        erro2:false,
                                                        buttonDisabled:false,
                                                        user:'',
                                                        password:'',
                                                        laz4:false
                                                 
                                                     
                                                  })
                                                    
                                                }, 2000);


                                                setTimeout(() => {
                                                    this.setState({
                                                      erro3:false,  
                                                    })

                                                    
                                                    window.location='/dashboard/admin/update'
                                                }, 3000);


                                                
     
                                            }}>send</Button>
                                
                             
                            </Form>
                        </Col>
                    </Row>
                </Container>


:''}


        





                
            </div>
        )
    }




}
