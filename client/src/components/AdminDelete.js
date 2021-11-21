import React, { Component } from 'react'
import axios, { Axios } from 'axios'
import {Container,Row,Col,Button} from 'react-bootstrap'
import SideBar from './SideBar'
import {AiFillStar} from 'react-icons/ai'


export default class AdminDelete extends Component {
    constructor(props){
        super(props)

        this.state={
            ime:'',
            istina:true,
            sve:[],
            message:false
          
        
        }

        this.deleteCookie=this.deleteCookie.bind(this)
    }
    
async componentDidMount(){

 


    const res = await axios.get('/admin')


   if (res.data=='Access not allowed') {
    this.props.history.push('/login')
       
   }else if(res.data.msg[0]=='Welcome Admin'){

    this.props.history.push('/dashboard/admin/delete')

    

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



    render() {
        return (
            <div>

                                             
<SideBar



menu_titlle="menu"

bgColor='firebrick'

hoverBgcolor='blue'

menu_items={["Sing Up","Login","Dashboard","Admin","Projects","Portfolio"]}

menu_links={["/","/login","/dashboard","/dashboard/admin","/projects","/portfolio"]}

menu_show={[true,true,false,false,false,false]}




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


    <div className="xs-12 text-center h5 text-warning">Delete a User

    </div>
    <br></br>
    <br></br>
      { this.state.sve.map((el)=>
        <Container key={el._id}>
            <Row>
            
        
     
        
                <Col xs={6}>
             
         
                    
                   <span className="text-primary h6">User: </span> {el.user}
          
                
                </Col>

                <Col xs={6}>
             
         
                    
      
          <Button size="sm" onClick={ async()=>{
       const res =await axios.delete(`/${el._id}`)
       console.log(res);
    this.setState({
        message:true
    })

    setTimeout(() => {
        this.setState({
            message:false
        })

        window.location="/dashboard/admin/delete"
    
        
    }, 2500);

          }}>Delete User</Button>
     
          
          </Col>
       

   

          <Col xs={12}><hr></hr></Col>

       
            
         
              
             
   
           </Row>
        </Container>
         
   
         )
 }

 <br></br>
 <br></br>

 {this.state.message ? <div className="text-success h6 col-xs-12 text-center">User deleted</div> :'' }


  
 

  
                
            </div>
        )
    }
}
