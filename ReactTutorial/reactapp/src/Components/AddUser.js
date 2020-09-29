import React, { Component } from 'react'
import posed from 'react-pose';

const Animation = posed.div({
    visible : {opacity : 1,
               applyAtStart : {display : "block"}
            },
    hidden : {opacity : 0,
              applyAtEnd : {display : "none"}
    }
});

class AddUser extends Component {
    state={
        visible:false
    }

    changeVisibility = (e)=>
    {
        this.setState(
            {
                visible : !this.state.visible
            }
        )
    }
    render() {
        const {visible}=this.state;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible?"hide form":"show form"}</button>
                <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">

                    <div className="card-header">
                     <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                    <form>
                        <div className="form-group"></div>
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" id="id" placeholder="adınızı girin"></input>

                        <div className="form-group"></div>
                        <label htmlFor="surname">Surname</label>
                        <input className="form-control" type="text" name="surname" id="surname" placeholder="soyadınızı girin"></input>
                        <button className="btn btn-danger btn-block">Add User</button>
                    </form>
                    </div>
                </div>
                </Animation>
            </div>
        )
    }
}

export default AddUser;
