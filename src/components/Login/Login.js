import { onAuthStateChanged, signInWithPopup,  GoogleAuthProvider  } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';

import './Login.css'
const provider = new GoogleAuthProvider()
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
  
    const handleGoogleSignIn = () => {
   
        signInWithPopup(auth , provider)
        .then(result=>{
          const user = result.user;
          console.log(user)
          
          
        })
      }
  
    return (
        
        <div className='form-container '>
         <form onSubmit={handleUserSignIn} action="">
         <div>
          <h1 className='form-title'> Login page</h1>
           <div className='input-group'>
           <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur}  type="email" name='email' required />
           </div>
           <div className="input-group">
               <label htmlFor="password">Password</label>
               <input onBlur={handlePasswordBlur} type="password" name='password' required />
           </div>
           <p style={{color:'red'}}>{error}</p>
           {
               loading && <p>Loading...</p>
           }
           <input className='form-submit' type="submit" value="Login" required />
          </div>
          <div className='mb-2'>
      <button onClick={handleGoogleSignIn} className='px-5 fadeIn fourth' style={{backgroundColor:'#58baed' , border:"none"}}>Google</button>
      </div>
          <p>
             New to ema john?  <Link className='form-link' to='/signup'>Create an account</Link>

         </p>
         <p>
             Forget Password?  <Link className='form-link' to='/reset'>Reset Password</Link>
             
         </p>
         </form>

      
        </div>
    );
};

export default Login;