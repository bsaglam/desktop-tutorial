 
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Users from './Components/Users';



 class App extends Component {
  
  render() {
    return (
      <div>
         <div className="container"> 
         <Users />  
    </div>
      </div>
    )
  }
}


 

export default App;
