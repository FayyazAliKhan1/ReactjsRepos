import React from 'react';
import {Link} from 'react-router-dom'; import SignInLink from './SignIn'; 
import SignoutLink from './Signout';
const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">

            <div className="container">

                <Link to='/' className="brand-logo">Project</Link>
                <SignInLink />
                <SignoutLink />

                

            </div>

        </nav>
    )
};export default Navbar;