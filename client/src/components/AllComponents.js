import React, { Component } from 'react'
import{ BrowserRouter,Switch,Route,withRouter} from 'react-router-dom'
import SingUp from './SingUp'
import Login from './Login'
import Dashboard from './Dashboard'
import Admin from './Admin'
import Test from './Test'
import AdminCreate from './AdminCreate'
import AdminDelete from './AdminDelete'
import AdminUpdate from './AdminUpdate'






class AllComponents extends Component {

    constructor(props){
        super(props)
      
        this.state={
          prouka:''
        }
      }
      callbackFunction = (childData) => {
        this.setState({prouka: childData})
        console.log(this.state.poruka);
  }
      
        render() {
        
          return (
      
            <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={SingUp} /> 
      
                    <Route exact  path="/login" render={()=><Login  parentCallback = {this.callbackFunction} />} />
                    
      
                   <Route exact path='/dashboard' component={Dashboard} />
                 
                  
                    <Route exact path='/dashboard/admin' component={Admin} />


                    <Route exact path='/dashboard/admin/create' component={AdminCreate} />


                    <Route exact path='/dashboard/admin/update' component={AdminUpdate} />

                   <Route exact path="/dashboard/admin/delete" component={AdminDelete} />


                    <Route  path='/test'render={()=><Test data="1" />} />
                    
                    
                    <Route exact path='*' component={()=>{return <div><h1>404 NOT FOUND</h1></div>}} />
                    
      
      
      
      
                 
                   
               
                </Switch> 
            </div>
            </BrowserRouter>
           
          )
        }

}

export default AllComponents