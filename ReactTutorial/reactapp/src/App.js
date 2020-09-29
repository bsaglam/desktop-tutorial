 
import React, { Component } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Users from './Components/Users';



 class App extends Component {
  
  render() {
    return (
      <div>
         <div className="container"> 
         <Users />  
         <AddUser />
    </div>
      </div>
    )
  }
}


 

export default App;
