import React, { Component } from 'react'
import User from '../Components/User';
import UserConsumer from '../Context'
class Users extends Component {
render() {
    return(
        <UserConsumer>
            {
                value => { 
                    const {users} = value; //this.state anlamına geliyor value
                    return(
                        <div>
                            {
                                users.map(x =>{
                                return <User
                                            key = {x.id}
                                            name={x.id}
                                            surname={x.name}/>
                                     
                                })
                            }
                        </div>
                    )

                }
            }
        </UserConsumer>
    )
}
}

export default Users;
