import React, { Component, createElement } from 'react'
import {Container,Row,Col,Form,FormGroup,FormControl } from 'react-bootstrap'
import {Link,withRouter} from 'react-router-dom'





import { AiOutlineArrowRight} from 'react-icons/ai'
import { FaBars} from 'react-icons/fa'
import { FiFacebook ,FiInstagram,FiTwitter} from 'react-icons/fi'
import { AiOutlineGooglePlus ,AiOutlineArrowDown,AiOutlineArrowUp,AiOutlineEye,AiOutlineMail} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import {BsHandIndexThumb} from 'react-icons/bs'


 



import sideBarStyle from '../styles/SideBar.module.css'

class SideBar extends Component {
    constructor(){
        super()
        this.state={
            laz:false,
            laz2:false,
            laz3:false,
            laz4:false,
            laz5:false,
            hasError: false
          
       
        
        }
        this.prviNav=this.prviNav.bind(this)
        this.drugiiNav=this.drugiiNav.bind(this)
        this.treciNav=this.treciNav.bind(this)
        this.cetvrtiNav=this.cetvrtiNav.bind(this)
        this.promenIBg=this.promenIBg.bind(this)
        this.vratiBg=this.vratiBg.bind(this)
    
        
    }

    prviNav(){
        if (!this.state.laz) {

            this.setState({
                laz:true,
                laz2:false,
                laz3:false,
                laz4:false,
            })

            
        }else if(this.state.laz){
            this.setState({
                laz:false
            })

        }


    }

    drugiiNav(){

        if (!this.state.laz2) {

            this.setState({
              laz2:true,
              laz:false,
              laz3:false,
              laz4:false,
          
                
            })

            
        }else if(this.state.laz2){
            this.setState({
                laz2:false
            })

        }


    }
    treciNav(){
        if (!this.state.laz3) {

            this.setState({
              laz3:true,
              laz:false,
              laz2:false,
              laz4:false,
                
            })

            
        }else if(this.state.laz3){
            this.setState({
                laz3:false
            })

        }




    }

    cetvrtiNav(){
        if (!this.state.laz4) {

            this.setState({
              laz4:true,
              laz:false,
              laz3:false,
              laz2:false,
                
            })

            
        }else if(this.state.laz4){
            this.setState({
                laz4:false
            })

        }




    }

    promenIBg(a){
        a.target.style.backgroundColor=this.props.hoverBgcolor

    }
    vratiBg(b){
       b.target.style.backgroundColor="transparent"

    }


    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    


    
    render() {

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
        return (


            <div>

               {!this.state.laz5 ?



                <div className={sideBarStyle.main_div2}>


                      

                            <FaBars  className="text-dark" onClick={()=>{

                            this.setState({
                                 laz5:true
                             })

                            }} />
                      
                    


                </div> 


               :  



      



            <div className={sideBarStyle.main_div} style={{ backgroundColor:this.props.bgColor}}>
              <Container>
                    <Row>
                        <Col xs={12} className="text-end">
                            <RiCloseLine  className="h3 text-end text-light" onClick={()=>{

                       

        
                     this.setState({
                         laz5:false
                      })
                        
      
                
                               
                          
                             
                            }}/>
                        </Col>
                    </Row>
                </Container>
                <br/>

                <Container>
                    <Row>
                        <Col xs={3}>
                        <a href="https://facebook.com"> <FiFacebook className="h5 text-light"/></a>
                        </Col>
                       
                        <Col xs={3}>
                             <a href="https://instagram.com"><FiInstagram className="h5 text-light"/></a>
                        </Col>
                        <Col xs={3}>
                        <a href="https://google.com"><AiOutlineGooglePlus className="h5 text-light"/></a>
                        </Col>
                   
                        <Col xs={3}>
                        <a href="https://twitter.com"> <FiTwitter className="h5 text-light"/></a>
                       
                        </Col>
                    </Row>
                </Container>


                <br/>

<Container>
    <Row>
        <Col xs={12}>
        <Form className="text-light">
  <Form.Group className="" >
   
    <Form.Control size="md" type="text" placeholder="Search" className="bg-transparent"/>

  </Form.Group>

  
</Form>
           
        </Col>
     
    </Row>
</Container>



<br/>
<br/>

<Container>
    <Row>
        <Col xs={12} className="text-light">
      
                { !this.state.laz ?  <div onClick={this.prviNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_titlle}<AiOutlineArrowDown className="float-end"  /> </div> :  <div  onClick={this.prviNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_titlle}<AiOutlineArrowUp  className="float-end" onClick={this.prviNav} /> </div> }
              
        </Col>
    

        
                {this.state.laz ?

                <div>
                 {this.props.menu_show[0] ?
             
                      <Col xs={12}>
                            <br/>
                          
                       <Link to={this.props.menu_links[0]}> <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_items[0]}</div></Link>
                        </Col>

                        :''}


               

                 {this.props.menu_show[1] ?
                        <Col xs={12}>
                        <br/>
                       
                        <Link to={this.props.menu_links[1]}> <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_items[1]}</div></Link>
                        </Col>
                        :''}

               

                 {this.props.menu_show[2] ?
                        <Col xs={12}>
                        <br/>
                       
                        <Link to={this.props.menu_links[2]}>  <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_items[2]}</div></Link>
                        </Col>
                        :''}

     

               {this.props.menu_show[3] ?
                        <Col xs={12}>
                        <br/>
                       
                        <Link to={this.props.menu_links[3]}>    <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_items[3]}</div></Link>
                        </Col> 
                        :''}
          


          {this.props.menu_show[4] ?
                        <Col xs={12}>
                        <br/>
                       
                        <Link to={this.props.menu_links[4]}>  <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_items[4]}</div></Link>
                        </Col> 
                        :''}
                


                        
                {this.props.menu_show[5] ?
                        <Col xs={12}>
                        <br/>
                       
                        <Link to={this.props.menu_links[5]}>    <div className="text-light text-center"onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.menu_items[5]}</div></Link>
                        </Col> 
                        :''}
                 



                          </div>
                        :''}

                   


<Col xs={12} className="text-light">
<br />


            <div>
                { !this.state.laz2 ?   <div onClick={this.drugiiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.instruction_titlle}<AiOutlineArrowDown className="float-end"  /> </div> :  <div  onClick={this.drugiiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.instruction_titlle}<AiOutlineArrowUp  className="float-end" onClick={this.drugiiNav} /> </div> }
              </div>
           
        </Col>
    




        
                {this.state.laz2 ?

                <div>


          
                {this.props.instruction_show[0] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.instruction_links[0]}>     <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.instruction_items[0]}</div></Link>
                        </Col>

                        :''}
                  


                  {this.props.instruction_show[1] ?
                        <Col xs={12}>
                        <br/>
                       
                        <Link to={this.props.instruction_links[1]}>     <div className="text-light text-center"onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                        
                        >{this.props.instruction_items[1] || 'second'}</div></Link>
                        </Col>
                        :""}
                    



                    {this.props.instruction_show[2] ?
<Col xs={12}>
<br/>

         <Link to={this.props.instruction_links[2]}><div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.instruction_items[2]}</div></Link>
</Col>
                         :""}




                {this.props.instruction_show[3] ?
<Col xs={12}>
<br/>

                     <Link to={this.props.instruction_links[3]}>  <div className="text-light text-center"onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.instruction_items[3]}</div></Link>
</Col>

                    :''}




                      {this.props.instruction_show[4] ?
<Col xs={12}>
<br/>

                               <Link to={this.props.instruction_links[4]}>  <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>{this.props.instruction_items[4]}</div></Link>
</Col>
                   :""}



                {this.props.instruction_show[5] ?
<Col xs={12}>
<br/>

                            <Link to={this.props.instruction_links[5]}>  <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg} 
                            
                            >{this.props.instruction_items[5] || 'six'}</div></Link>
</Col>
                           :''}




                          </div>
                        :''}



                        
<Col xs={12} className="text-light">
<br/>
              { !this.state.laz3 ? <div onClick={this.treciNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}><AiOutlineEye />{this.props.about_titlle}  <AiOutlineArrowDown className="float-end"  onClick={this.treciNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}/>  </div>:<div onMouseOver={this.promenIBg} onMouseOut={this.vratiBg} onClick={this.treciNav}><AiOutlineEye />{this.props.about_titlle}<AiOutlineArrowUp  className="float-end" onClick={this.treciNav}
             
             onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}

             /></div> }

           
        </Col>
    

        
                {this.state.laz3 ?

                <div>

                    {this.props.about_show[0] ?

                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.about_links[0]}>    <div className="text-light text-center"
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            
 > {this.props.about_items[0]}</div></Link>
                        </Col>
                        :""}
                   


                   {this.props.about_show[1] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.about_links[1]}>    <div className="text-light text-center" 
                            
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            
                            
                            > {this.props.about_items[1]}</div></Link>
                        </Col>
                        :""}
               


               {this.props.about_show[2] ?

                      <Col xs={12}>
                            <br/>
                          

                            <Link to={this.props.about_links[2]}>    <div className="text-light text-center"

onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}


                             
                             > {this.props.about_items[2]}</div></Link>
                        </Col>
                        :""}
              



              {this.props.about_show[3] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.about_links[3]}>    <div className="text-light text-center" 
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            
                         > {this.props.about_items[3]}</div></Link>
                        </Col>
                        :''}
                 


                 {this.props.about_show[4] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.about_links[4]}>    <div className="text-light text-center" 
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
   
                            > {this.props.about_items[4]}</div></Link>
                        </Col>
                        :''}
                


                {this.props.about_show[5] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.about_links[5]}>    <div className="text-light text-center" 
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
    
                            > {this.props.about_items[5]}</div></Link>
                        </Col>
                        :''}
               


                          </div>
                        :''}


<Col xs={12} className="text-light">
<br/>
          { !this.state.laz4 ? <div onClick={this.cetvrtiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}><AiOutlineArrowDown className="float-end" onClick={this.cetvrtiNav}  /><AiOutlineMail /> {this.props.contact_titlle} </div>   :  <div  onClick={this.cetvrtiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg} ><AiOutlineArrowUp className="float-end"  onClick={this.cetvrtiNav}/><AiOutlineMail />{this.props.contact_titlle} </div> }

         
</Col>
    

        
                {this.state.laz4 ?

                <div>
          
                     {this.props.contact_show[0] ?
      
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.contact_links[0]}>    <div className="text-light text-center"

onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}                       
                             
                             > {this.props.contact_items[0]}</div></Link>
                        </Col>
                        :''}
                    



                    {this.props.contact_show[1] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.contact_links[0]}>    <div className="text-light text-center" 
                            
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            
                            > {this.props.contact_items[1]}</div></Link>
                        </Col>
                        :''}
                 

                 {this.props.contact_show[2] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.contact_links[0]}>    <div className="text-light text-center" 
                            
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            
                            
                            > {this.props.contact_items[2]}</div></Link>
                        </Col>
                        :''}
                  



                  {this.props.contact_show[3] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.contact_links[1]}>    <div className="text-light text-center"
                            
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            >
                 {this.props.contact_items[3]}</div></Link>
                        </Col>
                        :''}
                 


                 {this.props.contact_show[4] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.contact_links[1]}>    <div className="text-light text-center"
                            
                            onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}
                            
                            > {this.props.contact_items[4]}</div></Link>
                        </Col>
                        :''}
                  
                    


                  {this.props.contact_show[5] ?
                      <Col xs={12}>
                            <br/>
                          
                            <Link to={this.props.contact_links[1]}>    <div className="text-light text-center"

onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}                         
        
                            
                            > {this.props.contact_items[5]}</div></Link>
                        </Col>
                        :''}
                    
                    



                          </div>


                        :''}



            
                    
                 


             
                      
                       

       
    </Row>
</Container> 



                
            </div>

          } 










            </div>
        )
    }
}



export default  withRouter(SideBar);