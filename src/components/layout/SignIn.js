import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import signOut from '../../store/actions/authAction';
const SignInLink = (props) => {
    
    return(
        <ul className="right">
            <li><NavLink to='/create'>Create Project </NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>PP</NavLink></li>
        </ul>
    )
};
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLink);