import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Container,Row,Col,Button} from 'react-bootstrap'
import SideBar from './SideBar'



 class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            ime:'',
         

        
        }
        this.deleteCookie=this.deleteCookie.bind(this)
   
    }


   async componentDidMount(){
       const res = await axios.get('/login')
    //    console.log(res);
       if (res.data == 'You are not loged in') {
           this.props.history.push('/login')
           
       }else{
           this.props.history.push('/dashboard')
         
               this.setState({
                   ime:res.data
               })
               
       
       }
      

 
    }

   async deleteCookie(a){
       a.preventDefault()
    const res = await axios.get('/detelCookie')
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

bgColor='black'

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

      



      
                <br/>
                <br/>
                
                <Container fluid>
                    <Row>
                       
                        <Col xs={8} className="text-center">Welcome {this.state.ime}
                        </Col>
                        <Col xs={4}> <Button size="sm" onClick={this.deleteCookie}>Log Out</Button></Col>
                    </Row>
                </Container>

     
               {this.state.dashic}


           
                
            </div>
        )
    }
}

export default withRouter(Dashboard)