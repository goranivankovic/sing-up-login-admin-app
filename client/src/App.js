import React, { Component } from 'react'

import{ BrowserRouter,Switch,Route,withRouter} from 'react-router-dom'
import SingUp from './components/SingUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Admin from './components/Admin'
import AllComponents from './components/AllComponents'


 class App extends Component {
  constructor(props){
  super(props)

  this.state={
    laz:false
  }
}



  render() {
  
    return (

   <div>
     <AllComponents />
   </div>
     
    )
  }
}


export default App;