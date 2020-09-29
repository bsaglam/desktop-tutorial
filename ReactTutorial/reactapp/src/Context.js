import React, { Component } from 'react'

const UserContext=React.createContext();

export class UserProvider extends Component {
    state={ users : [
        {id:1,
         name : "burcu",
        surname:"sağlam"},
         {
           id:2,
           name: "doğu",
           surname:"sönmez"
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
