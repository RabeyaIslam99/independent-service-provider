import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
     const navigate = useNavigate()
     const location = useLocation();
     const from = location.state?.from.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value)

    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }

    if(user){
        navigate(from, {replace : true} );

    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        
    }
  
    return (
        
        <div className='form-container '>
         <form onSubmit={handleUserSignIn} action="">
         <div>
          <h1 className='form-title'> Login page</h1>
           <div className='input-group'>
           <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name='email' required />
           </div>
           <div className="input-group">
               <label htmlFor="password">Password</label>
               <input onBlur={handlePasswordBlur} type="password" name='password' required />
           </div>
           <p>{error?.message}</p>
           {
               loading && <p>Loading...</p>
           }
           <input className='form-submit' type="submit" value="Login" required />
          </div>
          <p>
             New to ema john?  <Link className='form-link' to='/signup'>Create an account</Link>
         </p>
         </form>

      
        </div>
    );
};

export default Login;