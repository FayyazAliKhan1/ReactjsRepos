import React from 'react';
import {NavLink} from 'react-router-dom';
const SignInLink = () => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>Create Project </NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>PP</NavLink></li>
        </ul>
    )
};export default SignInLink;