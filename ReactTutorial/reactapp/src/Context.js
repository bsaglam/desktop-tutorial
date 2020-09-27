import React, { Component } from 'react'
 
const UserContext=React.createContext(); 
const reducer = (state,action) => {
    switch (action.type)
    {
        case "DELETE_USER" :
            {
                return {
                    ...state,
                    users : state.user.filter(user => action.payload !== user.id)
                }
            }
        default : return state;
    }
}

export class UserProvider extends Component {
    state={ users : [
        {
         key:1,
         id:1,
         name : "burcu"},
         {
          key:2,
           id:2,
           name: "doğu"
         }
        ],
        dispatch: action =>{ this.setState(state=>reducer(state,action))}
    }
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
