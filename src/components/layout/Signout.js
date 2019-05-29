import React from 'react'; import {NavLink} from 'react-router-dom';
 const SignoutLink = () => {
     return(
         <div>
             <ul className="right">
                 <li><NavLink to='/'>Sign Up</NavLink></li>
                 <li><NavLink to='/'>Login</NavLink></li>
             </ul>
         </div>
     );
 }; export default SignoutLink;