import React, { Component } from 'react'

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
    render() {
        const {name,surname} = this.props
        const {isVisible} =this.state
        return (
            
              <div>
                {isVisible ? <div><ul><li>Adı:{name} <i className="fa fa-trash-o" aria-hidden="true"></i></li><li>Soyadı:{surname}</li></ul></div> : null}
                <h1 onClick= {this.tikla}>tıkla bana</h1>
             </div> 
            
        )
    }

}

export default User;

 
