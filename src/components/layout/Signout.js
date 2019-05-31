import React from 'react'; import {NavLink} from 'react-router-dom';
 const SignoutLink = () => {
     return(
         <div>
             <ul className="right">
                 <li><NavLink to='/signup'>Sign Up</NavLink></li>
                 <li><NavLink to='/signin'>Login</NavLink></li>
             </ul>
         </div>
     );
 }; export default SignoutLink;