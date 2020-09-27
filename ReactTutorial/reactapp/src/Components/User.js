import React, { Component } from 'react'
import UserConsumer from '../Context' 
class User extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            isVisible : true
        }
    }
   /* tikla(e)
    {
       console.log(e.target);
       console.log("test");
    }*/

    tikla = (e) =>
    {
        this.setState({isVisible : ! this.state.isVisible});
    }
    onDeleteUser = (dispatch,e) =>
    {
        const {id} = this.props; 
        dispatch({type:"DELETE_USER",payload:id});
    }
    render() {
        const {name,surname} = this.props
        const {isVisible} =this.state
        return (
            <UserConsumer>
                {
                    value => {
                    const dispatch = this.state; 
                    return(
                        
                        <div>
                        {isVisible ? 
                        <div>
                            <ul>
                                <li>Adı:{name} <i className="fa fa-trash-o" aria-hidden="true"></i></li>
                                <li>Soyadı:{surname}</li>
                                <i   onClick={this.onDeleteUser.bind(this,dispatch)}>Sil</i>
                            </ul>
                        </div> : null}
                        <h1 onClick= {this.tikla}>tıkla bana</h1>
                     </div> 

                    )}
                }
            </UserConsumer>
        )
    }

}

export default User;

 
