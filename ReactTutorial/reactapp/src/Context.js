import React, { Component } from 'react'

const UserContext=React.createContext();

export class UserProvider extends Component {
    state={ users : [
        {id:1,
         name : "burcu"},
         {
           id:2,
           name: "doğu"
         }
      ]}
    render() {
        return (
             <UserContext.Provider value={this.state}> 
                 {this.props.children}
             </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
