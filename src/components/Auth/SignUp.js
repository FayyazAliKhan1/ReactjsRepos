import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '', password: '', FirstName: '', LastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();console.log(this.state);
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                </form>
                <div className="input-field">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" id='FirstName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" id='LastName' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
                
            </div>
        )
    }
}

export default SignUp
